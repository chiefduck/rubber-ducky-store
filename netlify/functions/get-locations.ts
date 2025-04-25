import type { Handler } from "@netlify/functions"

const handler: Handler = async (event, context) => {
    const AIRTABLE_KEY = process.env.DUCKY_LOCATIONS_SECRET;
  const BASE_ID = "app8uQ8vVJMiI8gWb"
  const TABLE_NAME = "Locations"

  try {
    const response = await fetch(`https://api.airtable.com/v0/${BASE_ID}/${TABLE_NAME}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_KEY}`
      }
    })

    const data = await response.json()
    const locations = data.records.map((record: any) => {
      const f = record.fields || {}
      return {
        id: record.id,
        name: (f["name"] || f["name "] || "").trim(),
        address: (f["address"] || f[" address "] || "").trim(),
        city: (f["city"] || f[" city "] || "").trim(),
        state: (f["state"] || f[" state "] || "").trim(),
        zipCode: String(f["zipCode"] || f[" zipCode "] || ""),
        phone: (f["phone"] || f[" phone "] || "").trim(),
        hours: (f["hours"] || f[" hours "] || "").trim(),
        type: (f["type"] || f[" type "] || "").trim(),
        latitude: Number(f["latitude"] || f[" latitude "] || null),
        longitude: Number(f["longitude"] || f[" longitude "] || null)
      }
    })

    return {
      statusCode: 200,
      body: JSON.stringify(locations)
    }
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch locations", details: err })
    }
  }
}

export { handler }