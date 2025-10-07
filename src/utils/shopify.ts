// src/utils/shopify.ts
// -------------------------------------------------------------
// ✅ Shopify Storefront API Utilities
// Using the modern Cart API (v2025-10)
// -------------------------------------------------------------

const SHOP_DOMAIN = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const STOREFRONT_TOKEN = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;
const API_VERSION = "2025-10";

/** ------------------------------------------------------------------------
 * Generic helper for GraphQL calls
 * ---------------------------------------------------------------------- */
async function shopifyRequest(query: string, variables: Record<string, any> = {}) {
  const res = await fetch(`https://${SHOP_DOMAIN}/api/${API_VERSION}/graphql.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": STOREFRONT_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });

  const json = await res.json();

  if (json.errors) {
    console.error("❌ Shopify API Error:", json.errors);
    throw new Error(json.errors[0]?.message || "Shopify API error");
  }

  return json.data;
}

/** ------------------------------------------------------------------------
 * 🔎 Fetch a single product by handle
 * ---------------------------------------------------------------------- */
export async function getProductByHandle(handle: string) {
  const query = `
    query ProductByHandle($handle: String!) {
      product(handle: $handle) {
        id
        title
        descriptionHtml
        featuredImage { url altText }
        images(first: 10) { edges { node { url altText } } }
        variants(first: 10) {
          edges {
            node {
              id
              title
              price { amount currencyCode }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyRequest(query, { handle });
  if (!data?.product) {
    console.warn(`⚠️ No product found for handle: ${handle}`);
    return null;
  }

  return data.product;
}

/** ------------------------------------------------------------------------
 * 🛍️ Fetch all products (for /shop page or featured grids)
 * ---------------------------------------------------------------------- */
export async function getAllProducts(limit = 50) {
  console.log(`🛍️ Fetching up to ${limit} products...`);

  const query = `
    query AllProducts($first: Int!) {
      products(first: $first) {
        edges {
          node {
            id
            handle
            title
            description
            featuredImage { url altText }
            tags
            variants(first: 1) {
              edges {
                node {
                  id
                  title
                  price { amount currencyCode }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyRequest(query, { first: limit });
  const products = data?.products?.edges?.map((edge: any) => edge.node) || [];

  // 🧠 Filter out "hidden" or "internal" tagged products
  const visibleProducts = products.filter(
    (p) =>
      !p.tags.includes("hidden") &&
      !p.tags.includes("internal") &&
      !p.tags.includes("distributor")
  );

  console.log(`✅ Displaying ${visibleProducts.length} public products`);
  return visibleProducts;
}

// Add this below getAllProducts()

export async function getProductsByCollection(handle: string) {
  const query = `
    query CollectionByHandle($handle: String!) {
      collection(handle: $handle) {
        products(first: 50) {
          edges {
            node {
              id
              handle
              title
              tags
              featuredImage { url altText }
              variants(first: 1) {
                edges {
                  node {
                    id
                    title
                    price { amount currencyCode }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const data = await shopifyRequest(query, { handle });
  const products = data?.collection?.products?.edges?.map((e: any) => e.node) || [];

  // Hide internal/distributor products automatically
  return products.filter(
    (p) =>
      !p.tags.includes("hidden") &&
      !p.tags.includes("internal") &&
      !p.tags.includes("distributor")
  );
}



/** ------------------------------------------------------------------------
 * 🛒 Create a Cart → returns checkout URL
 * ---------------------------------------------------------------------- */
export async function createCheckout(variantId: string, quantity = 1) {
  console.log("🛒 Creating cart for:", variantId, "x", quantity);

  const query = `
    mutation cartCreate($input: CartInput) {
      cartCreate(input: $input) {
        cart { id checkoutUrl }
        userErrors { field message }
      }
    }
  `;

  const variables = {
    input: {
      lines: [{ merchandiseId: variantId, quantity }],
    },
  };

  const data = await shopifyRequest(query, variables);
  const cart = data?.cartCreate?.cart;
  const userErrors = data?.cartCreate?.userErrors || [];

  if (userErrors.length > 0) {
    console.error("❌ Shopify cartCreate userErrors:", userErrors);
    throw new Error(userErrors[0].message || "Shopify cartCreate failed");
  }

  if (!cart?.checkoutUrl) {
    console.error("❌ cartCreate response missing checkoutUrl:", data);
    throw new Error("Failed to create checkout URL");
  }

  console.log("✅ Checkout URL:", cart.checkoutUrl);
  return cart.checkoutUrl;
}
