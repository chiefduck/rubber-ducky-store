
# 🦆 Rubber Ducky Drink Co. — Website

This is the frontend website for Rubber Ducky Drink Co. Built with **React**, **Vite**, and **TailwindCSS**.

- Live site: [https://drinkducky.com](https://drinkducky.com)
- Products: Non-alcoholic, ready-to-drink margaritas
- Primary SKUs: Classic Lime, Strawberry, Watermelon Jalapeño, Passionfruit Guava, Blueberry Mint

---

## 🚀 Project Structure

```
/public
/src
  /components
  /pages
  /sections
  /styles
  /assets
vite.config.ts
tailwind.config.js
README.md
```

---

## 🛠️ Tech Stack

| Technology     | Purpose                                   |
|----------------|-------------------------------------------|
| React + Vite   | Frontend framework                        |
| TailwindCSS    | Styling and layout                        |
| Netlify        | Deployment + serverless functions         |
| Google Sheets  | Source of truth for store locator data    |
| PapaParse      | CSV parsing for dynamic store rendering   |
| Mapbox / GMaps | Interactive maps (Google currently live)  |

---

## 🧩 Key Features

- 📍 **Store Locator** with searchable map and product filtering  
- 🛒 **Shop** page linking to external Shopify store  
- 📄 **FAQ, Contact, About, Recipes, Articles** pages  
- 🔥 Integrated with **Google reCAPTCHA v3** for spam protection  
- ⚙️ Optional GHL chatbot + distributor inquiry form

---

## 📍 Store Locator System — Rubber Ducky Drink Co.

### ✅ How It Works

**Data Source:**  
All retailer data is stored and managed in a **Google Sheet**.

**Geocoding:**  
A **Google Apps Script** automatically fills in missing Latitude/Longitude coordinates using the **Google Maps Geocoding API** whenever new stores are added.

**Map Rendering:**  
The React app uses **PapaParse** to fetch and parse the published CSV file from Google Sheets and displays it on a styled **Google Map** with pins.

---

### ⚙️ Core Components

| Component         | Role                                                         |
|-------------------|--------------------------------------------------------------|
| Google Sheet      | Primary source of truth for all store locations              |
| Apps Script       | Detects rows missing lat/lng and auto-fills coordinates      |
| PapaParse         | Parses CSV from Google Sheets for frontend display           |
| `GoogleMap.tsx`   | Renders the map and places location pins                     |
| `StoreLocator.tsx`| Handles search, filtering, and display of store listings     |

---

### 🔁 Workflow (How to Add a New Store)

1. **Add** the new store to the Google Sheet (leave Lat/Lng columns blank).
2. **Run** the `geocodeNewStores` Google Apps Script manually — or wait for the daily trigger.
3. **Done.** Lat/Lng will auto-fill → Site updates instantly via the live published CSV.

> **Note:** There is no `locations.json` file — store data is pulled live from Google Sheets.

---

### 🔑 API Keys

| Key Type        | Purpose                                                      |
|------------------|--------------------------------------------------------------|
| Maps JavaScript  | Loads the map on the frontend. **Restrict by HTTP referrer** (`*.drinkducky.com`) |
| Geocoding API    | Used **only by the Apps Script** for server-side lat/lng. Restrict to just the Geocoding API. No referrer needed. |

---

### 💡 Recommendations

- ✅ **Split keys** for frontend and backend use.
- ✅ Restrict **Maps JS Key** to your domain only.
- ✅ Restrict **Geocoding Key** to just the Geocoding API.
- ✅ Set usage/billing alerts inside Google Cloud Console.

---

### 📈 Scalability

This setup supports **up to ~1,000 stores** with no backend needed.

- CSV from Google Sheets updates instantly when Lat/Lng is filled.
- Works seamlessly with Google Maps pins and clustering if added in future.

---
