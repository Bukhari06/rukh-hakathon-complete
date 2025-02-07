import { groq } from "next-sanity";

// Query to fetch all products
export const allProducts = groq`*[_type == "product"]`;

// Query to fetch the first 3 products
export const four = groq`*[_type == "product"][0..3]`;
