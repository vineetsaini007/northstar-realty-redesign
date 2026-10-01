export type PropertyType = "House" | "Condo" | "Townhome";

export interface Listing {
  id: number;
  title: string;
  address: string;
  area: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  type: PropertyType;
  image: string;
  tag: string;
  description: string;
  features: string[];
  agentId: number;
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "The Waterline House",
    address: "1428 Shoreline Drive",
    area: "Bainbridge Island",
    price: 2495000,
    beds: 4,
    baths: 3,
    sqft: 3420,
    type: "House",
    image: "/images/coastal-house.jpg",
    tag: "Water view",
    description:
      "An architectural retreat with uninterrupted west-facing water views, generous outdoor living, and quietly crafted interiors.",
    features: [
      "Waterfront outlook",
      "Cedar architecture",
      "Outdoor terrace",
      "Two-car garage",
    ],
    agentId: 1,
  },
  {
    id: 2,
    title: "The Elliott Penthouse",
    address: "2121 Elliott Avenue, Unit 1802",
    area: "Seattle",
    price: 1795000,
    beds: 3,
    baths: 2,
    sqft: 2280,
    type: "Condo",
    image: "/images/penthouse.jpg",
    tag: "New listing",
    description:
      "A light-filled city home with an open living plan, natural finishes, and a skyline that becomes part of every room.",
    features: [
      "Skyline outlook",
      "Private terrace",
      "Secure parking",
      "Concierge entry",
    ],
    agentId: 2,
  },
  {
    id: 3,
    title: "The Alder Garden",
    address: "5804 37th Avenue NE",
    area: "Seattle",
    price: 1395000,
    beds: 4,
    baths: 3,
    sqft: 2760,
    type: "House",
    image: "/images/garden-house.jpg",
    tag: "Open Sunday",
    description:
      "A garden-framed home with generous gathering spaces, a flexible study, and a considered connection to the outdoors.",
    features: [
      "Established garden",
      "Flexible study",
      "Stone patio",
      "Updated kitchen",
    ],
    agentId: 1,
  },
  {
    id: 4,
    title: "The Meridian Loft",
    address: "913 Meridian Street",
    area: "Bellevue",
    price: 1125000,
    beds: 2,
    baths: 2,
    sqft: 1680,
    type: "Condo",
    image: "/images/penthouse.jpg",
    tag: "City living",
    description:
      "A sophisticated and easy-care residence close to dining, parks, and the city’s best-connected routes.",
    features: [
      "Open-plan living",
      "Guest suite",
      "Private parking",
      "Walkable location",
    ],
    agentId: 2,
  },
  {
    id: 5,
    title: "The Fernwood Residence",
    address: "84 Fernwood Lane",
    area: "Bainbridge Island",
    price: 1650000,
    beds: 4,
    baths: 3,
    sqft: 3040,
    type: "House",
    image: "/images/garden-house.jpg",
    tag: "Just added",
    description:
      "A welcoming family home with rooms to grow into and an established garden that changes with the seasons.",
    features: ["Garden setting", "Family room", "Home office", "Covered porch"],
    agentId: 1,
  },
  {
    id: 6,
    title: "The Cove Retreat",
    address: "271 Cove Point Road",
    area: "Kirkland",
    price: 2195000,
    beds: 3,
    baths: 3,
    sqft: 2960,
    type: "Townhome",
    image: "/images/coastal-house.jpg",
    tag: "Water view",
    description:
      "Clean lines and warm materials frame an effortless lakeside lifestyle with flexible entertaining space.",
    features: [
      "Water outlook",
      "Roof terrace",
      "Guest suite",
      "Two-car garage",
    ],
    agentId: 2,
  },
];

export const agents = [
  {
    id: 1,
    name: "Amelia Hart",
    role: "Founding broker",
    area: "Island and waterfront homes",
    initials: "AH",
    quote: "The right home makes room for who you are becoming.",
  },
  {
    id: 2,
    name: "Noah Bennett",
    role: "Senior advisor",
    area: "City homes and new development",
    initials: "NB",
    quote: "Good guidance makes a complex move feel clear.",
  },
];

export const formatPrice = (value: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
