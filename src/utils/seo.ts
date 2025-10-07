// src/utils/seo.ts
export interface MetaConfig {
    title?: string;
    description?: string;
    canonical?: string;
    image?: string;
    type?: string;
  }
  
  export function setMetaTags({
    title,
    description,
    canonical,
    image,
    type = "website",
  }: MetaConfig) {
    // Title
    document.title = title || "Rubber Ducky Drink Co. | Non-Alcoholic Margaritas";
  
    // Description
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", type);
    setMeta("property", "og:url", canonical);
    setMeta("property", "og:image", image);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", image);
  
    // Canonical
    if (canonical) {
      let link = document.querySelector("link[rel='canonical']");
      if (!link) {
        link = document.createElement("link");
        link.setAttribute("rel", "canonical");
        document.head.appendChild(link);
      }
      link.setAttribute("href", canonical);
    }
  }
  
  function setMeta(attr: "name" | "property", key: string, value?: string) {
    if (!value) return;
    let tag = document.querySelector(`meta[${attr}='${key}']`);
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute(attr, key);
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", value);
  }
  