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
      default:
        console.log("Método no soportado. Usa GET.");
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

main();
