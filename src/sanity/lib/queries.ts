import { groq } from "next-sanity";

// Corrected allProducts query with proper syntax
export const allProducts = groq`*[_type == "product"]`;

// Corrected four query for fetching the first 3 products
export const four = groq`*[_type == "product"][0..3]`;
