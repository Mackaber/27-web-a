export const endpoint = "https://dummyjson.com";

export const baseUrl = ({ path, limit }) => `${endpoint}${path}?limit=${limit}`;
