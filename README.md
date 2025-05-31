# 🛍️ Challenge TechLab

![Node.js](https://img.shields.io/badge/Node.js-18.x-green)

Sistema de gestión de productos para tienda en línea mediante CLI, conectado a la API FakeStore.

## 🚀 Instalación

### Clonar repositorio:
```
    git clone https://github.com/chalys/challenge-techlab
    cd challenge-techlab
```
### Instalar dependencias:
```
    npm install
```
## 📋 Uso

### Consultar productos
```
    npm run start GET products       # Todos los productos
    npm run start GET products/2     # Producto con ID 2
```
### Crear producto
```
    npm run start POST products "Zapatillas" 59.99 "calzado"
```
### Eliminar producto
```
    npm run start DELETE products/5
```
## 🛠️ Tecnologías
* Node.js
* Fetch API
* FakeStore API

Desafío completado para TechLab - ¡Demostrando habilidades en Node.js y APIs!