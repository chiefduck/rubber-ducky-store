
export interface StoreLocation {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  latitude: number;
  longitude: number;
  phone: string;
  hours: string;
}

export const locations: StoreLocation[] = [
  {
    id: "1",
    name: "Duck's Market",
    address: "123 Main Street",
    city: "Los Angeles",
    state: "CA",
    zipCode: "90001",
    latitude: 34.0522,
    longitude: -118.2437,
    phone: "(213) 555-1234",
    hours: "Mon-Fri: 9am-9pm, Sat-Sun: 10am-7pm"
  },
  {
    id: "2",
    name: "Quack's Natural Foods",
    address: "456 Broadway",
    city: "New York",
    state: "NY",
    zipCode: "10001",
    latitude: 40.7128,
    longitude: -74.0060,
    phone: "(212) 555-5678",
    hours: "Mon-Fri: 8am-10pm, Sat-Sun: 9am-8pm"
  },
  {
    id: "3",
    name: "Splash Beverages",
    address: "789 Oak Avenue",
    city: "Chicago",
    state: "IL",
    zipCode: "60601",
    latitude: 41.8781,
    longitude: -87.6298,
    phone: "(312) 555-9012",
    hours: "Mon-Sun: 10am-9pm"
  },
  {
    id: "4",
    name: "Waddle & Sip Cafe",
    address: "321 Pine Street",
    city: "Seattle",
    state: "WA",
    zipCode: "98101",
    latitude: 47.6062,
    longitude: -122.3321,
    phone: "(206) 555-3456",
    hours: "Mon-Fri: 7am-8pm, Sat-Sun: 8am-6pm"
  },
  {
    id: "5",
    name: "Ducky's Corner Store",
    address: "654 Maple Road",
    city: "Austin",
    state: "TX",
    zipCode: "78701",
    latitude: 30.2672,
    longitude: -97.7431,
    phone: "(512) 555-7890",
    hours: "Mon-Sun: 8am-11pm"
  },
  {
    id: "6",
    name: "Float Specialty Drinks",
    address: "987 Elm Boulevard",
    city: "Miami",
    state: "FL",
    zipCode: "33101",
    latitude: 25.7617,
    longitude: -80.1918,
    phone: "(305) 555-4321",
    hours: "Mon-Sun: 9am-10pm"
  }
];
