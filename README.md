# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/750e7918-2424-4a6a-b3f6-259d80f98042

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/750e7918-2424-4a6a-b3f6-259d80f98042) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/750e7918-2424-4a6a-b3f6-259d80f98042) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

*************************************************
📍 Rubber Ducky Drink Co. — Store Locator System
✅ How It Works
Retailer list: Managed in Google Sheets.

Geocoding: Google Apps Script automatically fills in Latitude/Longitude for new rows using the Google Maps Geocoding API.

Map + Pins: React site uses fetch + PapaParse to load the CSV → displays stores & pins on Google Maps via the GoogleMap.tsx component.

⚙️ Core Pieces
Piece	What it does
Google Sheet	Source of truth for all stores
Apps Script	Runs daily (or manually) to geocode new addresses
PapaParse	Parses CSV data from Google Sheets
GoogleMap.tsx	Renders map and drops pins
StoreLocator.tsx	Handles search, filtering, display

🔑 API Keys
Key	Use
Maps JS Key	Loads the frontend map — should have HTTP Referrer restrictions (*.drinkducky.com)
Geocoding Key	Used ONLY by Apps Script for server-side geocoding — no referrer restrictions needed, but restrict to Geocoding API only for security

🗂️ Workflow
Add new store rows to the Sheet → leave Latitude/Longitude blank.

Run geocodeNewStores Apps Script or wait for daily trigger.

Lat/Lng auto-fill → new pins appear live on site → done!

✅ Where to manage keys
Google Cloud Console → make sure your Maps JS Key and Geocoder Key are separate.

Watch usage → set budget alerts.

⚠️ Recommended Next
Split keys: one for frontend, one for backend.

Restrict Maps JS Key by HTTP Referrers.

Restrict Geocoding Key by API only.

💡 Notes
The live site uses the full published Google Sheets CSV URL.

Map styling and clustering can be added later.

System scales easily up to ~1,000 stores with no backend needed.

