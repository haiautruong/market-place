import { http, HttpResponse } from "msw";

// Import the first two products from the db.json file
const mockProducts = [
  {
    id: 1,
    title: "Metal Gear Girl",
    category: "Mythic",
    price: 30.09,
    isFavorite: false,
    createdAt: 1624533946000,
    theme: "Halloween",
    tier: "Premium",
    imageId: 8,
    author: {
      firstName: "Dewie",
      lastName: "Labeuil",
      email: "dlabeuilv@nba.com",
      gender: "Male",
      avatar:
        "https://robohash.org/nihiltotamdolorem.png?size=100x100&set=set1",
      onlineStatus: "idle",
    },
  },
  {
    id: 2,
    title: "Rhythm Ruler",
    category: "Epic",
    price: 52.57,
    isFavorite: true,
    createdAt: 1652687980000,
    theme: "Halloween",
    tier: "Deluxe",
    imageId: 11,
    author: {
      firstName: "Thaddeus",
      lastName: "Tumulty",
      email: "ttumultyt@t-online.de",
      gender: "Male",
      avatar:
        "https://robohash.org/perferendisitaquedolor.png?size=100x100&set=set1",
      onlineStatus: "offline",
    },
  },
];

export const handlers = [
  // API mock for products endpoint with full URL
  http.get("http://localhost:5005/products", () => {
    return HttpResponse.json(mockProducts);
  }),
];
