import fetch from "node-fetch";
import { argv } from "process";

const API_URL = "https://fakestoreapi.com";

async function main() {
  const [, , method, route, ...data] = argv;

  try {
    let result;
    switch (method) {
      case "GET":
        result = await handleGetRequest(route);
        break;
      case "POST":
        result = await handlePostRequest(route, data);
        break;
      case "DELETE":
        result = await handleDeleteRequest(route);
        break;
      default:
        console.log("Método no soportado. Usa GET, POST.");
        return;
    }
    console.log("Resultado:", result);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

// Manejar solicitudes GET
async function handleGetRequest(route) {
  if (route === "products") {
    const response = await fetch(`${API_URL}/products`);
    return await response.json();
  } else if (route.startsWith("products/")) {
    const productId = route.split("/")[1];
    const response = await fetch(`${API_URL}/products/${productId}`);
    return await response.json();
  } else {
    throw new Error(
      'Ruta no válida para GET. Usa "products" o "products/<id>"'
    );
  }
}

// Manejar solicitudes POST
async function handlePostRequest(route, data) {
  if (route !== "products") {
    throw new Error('Ruta no válida para POST. Usa "products"');
  }
  const [title, price, category] = data;
  if (!title || !price || !category) {
    throw new Error(
      "Faltan datos. Formato: POST products <title> <price> <category>"
    );
  }

  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title,
      price: parseFloat(price),
      category,
    }),
  });
  return await response.json();
}

// Manejar solicitudes DELETE
async function handleDeleteRequest(route) {
  if (!route.startsWith("products/")) {
    throw new Error('Ruta no válida para DELETE. Usa "products/<id>"');
  }
  const productId = route.split("/")[1];
  const response = await fetch(`${API_URL}/products/${productId}`, {
    method: "DELETE",
  });
  return await response.json();
}
main();
