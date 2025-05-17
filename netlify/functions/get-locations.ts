import type { Handler } from "@netlify/functions";

const handler: Handler = async (event, context) => {
  const AIRTABLE_KEY = process.env.DUCKY_LOCATIONS_SECRET;
  const BASE_ID = "app8uQ8vVJMiI8gWb";
  const TABLE_NAME = "Locations";

  function parseIfValid(value: any): number | null {
    if (typeof value === "string" && value.trim() === "") return null;
    const num = Number(value);
    return isNaN(num) ? null : num;
  }

  try {
    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`,
      },
    });

    const data = await response.json();

    const locations = data.records.map((record: any) => {
      const f = Object.fromEntries(
        Object.entries(record.fields || {}).map(([key, value]) => [key.trim(), value])
      );

      return {
        id: record.id,
        name: (f["name"] || "").trim(),
        address: (f["address"] || "").trim(),
        city: (f["city"] || "").trim(),
        state: (f["state"] || "").trim(),
        zipCode: String(f["zipCode"] || ""),
        phone: (f["phone"] || "").trim(),
        hours: (f["hours"] || "").trim(),
        type: (f["type"] || "").trim(),
        latitude: parseIfValid(f["latitude"]),
        longitude: parseIfValid(f["longitude"]),
      };
    });

    return {
      statusCode: 200,
      body: JSON.stringify(locations),
    };
  } catch (err) {
    console.error("❌ Error in get-locations:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch locations", details: err }),
    };
  }
};

export { handler };
