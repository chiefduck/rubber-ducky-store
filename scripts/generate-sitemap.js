/**
 * scripts/generate-sitemap.js
 * -------------------------------------
 * Node.js version — works on Netlify
 * Builds sitemap.xml with static + Shopify product pages
 */

import fs from "fs";
import fetch from "node-fetch";

// 🧩 Env vars
const DOMAIN = process.env.VITE_SITE_URL || "https://drinkducky.com";
const SHOPIFY_DOMAIN = process.env.VITE_SHOPIFY_STORE_DOMAIN;
const SHOPIFY_TOKEN = process.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

// 🧠 GraphQL query
const query = `
{
  products(first: 100) {
    edges {
      node {
        handle
        collections(first: 1) {
          edges {
            node {
              handle
            }
          }
        }
      }
    }
  }
}
`;

// 🛍️ Fetch Shopify products
async function fetchShopifyProducts() {
  if (!SHOPIFY_DOMAIN || !SHOPIFY_TOKEN) {
    console.warn("⚠️ Missing Shopify credentials. Skipping dynamic products.");
    return [];
  }

  try {
    const res = await fetch(`https://${SHOPIFY_DOMAIN}/api/2025-10/graphql.json`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": SHOPIFY_TOKEN,
      },
      body: JSON.stringify({ query }),
    });

    if (!res.ok) {
      console.error("❌ Shopify API request failed:", res.status, res.statusText);
      return [];
    }

    const json = await res.json();
    const products = json?.data?.products?.edges || [];

    return products.map((edge) => {
      const product = edge.node;
      const collectionHandle =
        product.collections?.edges?.[0]?.node?.handle || "product";
      return `${DOMAIN}/shop/${collectionHandle}/${product.handle}`;
    });
  } catch (err) {
    console.error("❌ Error fetching products from Shopify:", err);
    return [];
  }
}

// 🧾 Generate sitemap
async function generateSitemap() {
  const staticPages = [
    "/", "/shop", "/shop/drinks", "/shop/merch", "/shop/wholesale",
    "/store-locator", "/recipes", "/articles", "/about", "/contact",
    "/privacy-policy", "/refund-policy", "/shipping-policy", "/terms-of-service",
  ];

  const productUrls = await fetchShopifyProducts();
  const allUrls = [...new Set([...staticPages, ...productUrls])];

  const xmlUrls = allUrls
    .map((url) => {
      const priority =
        url === `${DOMAIN}/` ? "1.0"
        : url.includes("/shop") ? "0.9"
        : url.includes("/recipes") || url.includes("/articles") ? "0.8"
        : "0.6";

      return `
  <url>
    <loc>${url}</loc>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlUrls}
</urlset>`;

  fs.writeFileSync("./public/sitemap.xml", sitemap);
  console.log(`✅ Sitemap generated successfully with ${allUrls.length} URLs`);
}

// 🚀 Run
generateSitemap();
