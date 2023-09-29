export const endpoint = "https://dummyjson.com";

export const baseUrl = ({ path, limit }) => `${endpoint}${path}?limit=${limit}`;

const apiKey = "2dc00dcb68b5a8e266c25c184e354660";

export const endpointClima = ({ ciudad, pais }) => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&lang=sp&units=metric&appid=${apiKey}`;
};

export const endpointPaises = "https://restcountries.com/v3.1/region/america";
