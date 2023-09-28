data = {
    'Product': [
        {
            "parentSKU": "SKU1",
            "SKU": "SKU1-1",
            "barCode": "1",
            "name": "Producto 1",
            "category": "Categoria 1",
            "price": 1000,
            "cost": 500,
            "size": "S",
            "category2": "Categoria 1.1"
        },
        {
            "parentSKU": "SKU1",
            "SKU": "SKU1-2",
            "barCode": "1",
            "name": "Producto 1",
            "category": "Categoria 1",
            "price": 2000,
            "cost": 1000,
            "size": "M",
            "category2": "Categoria 1.1"
        },
        {
            "parentSKU": "SKU2",
            "SKU": "SKU2-1",
            "barCode": "2",
            "name": "Producto 2",
            "category": "Categoria 2",
            "price": 3000,
            "cost": 1500,
            "size": "L",
            "category2": "Categoria 2.1"
        },
        {
            "parentSKU": "SKU2",
            "SKU": "SKU2-2",
            "barCode": "2",
            "name": "Producto 2",
            "category": "Categoria 2",
            "price": 4000,
            "cost": 2000,
            "size": "XL",
            "category2": "Categoria 2.1"
        },
        {
            "parentSKU": "SKU3",
            "SKU": "SKU3-1",
            "barCode": "3",
            "name": "Producto 3",
            "category": "Categoria 3",
            "price": 5000,
            "cost": 2500,
            "size": "S",
            "category2": "Categoria 3.1"
        },
        {
            "parentSKU": "SKU3",
            "SKU": "SKU3-2",
            "barCode": "3",
            "name": "Producto 3",
            "category": "Categoria 3",
            "price": 6000,
            "cost": 3000,
            "size": "M",
            "category2": "Categoria 3.1"
        },
        {
            "parentSKU": "SKU4",
            "SKU": "SKU4-1",
            "barCode": "4",
            "name": "Producto 4",
            "category": "Categoria 4",
            "price": 7000,
            "cost": 3500,
            "size": "L",
            "category2": "Categoria 4.1"
        },
        {
            "parentSKU": "SKU4",
            "SKU": "SKU4-2",
            "barCode": "4",
            "name": "Producto 4",
            "category": "Categoria 4",
            "price": 8000,
            "cost": 4000,
            "size": "XL",
            "category2": "Categoria 4.1"
        },
        {
            "parentSKU": "SKU5",
            "SKU": "SKU5-1",
            "barCode": "5",
            "name": "Producto 5",
            "category": "Categoria 5",
            "price": 9000,
            "cost": 4500,
            "size": "S",
            "category2": "Categoria 5.1"
        },
        {
            "parentSKU": "SKU5",
            "SKU": "SKU5-2",
            "barCode": "5",
            "name": "Producto 5",
            "category": "Categoria 5",
            "price": 10000,
            "cost": 5000,
            "size": "M",
            "category2": "Categoria 5"
        }
    ],
    'Warehouse': [
        {
            "name": "Bodega",
            "type": 1,
            "integration_id": 1,
            "sync": 1,
            "removed": 0,
        },
        {
            "name": "Tienda",
            "type": 1,
            "integration_id": 2,
            "sync": 1,
            "removed": 0,
            "supplied": "Bodega 1"
        },
    ],
    'Inventory': [
        {
            "product": "Producto 1",
            "warehouse": "Bodega",
            "stock": 10,
            "removed": 0
        },
        {
            "product": "Producto 2",
            "warehouse": "Bodega",
            "stock": 20,
            "removed": 0
        },
        {
            "product": "Producto 3",
            "warehouse": "Bodega",
            "stock": 30,
            "removed": 0
        },
        {
            "product": "Producto 4",
            "warehouse": "Bodega",
            "stock": 40,
            "removed": 0
        },
        {
            "product": "Producto 5",
            "warehouse": "Bodega",
            "stock": 50,
            "removed": 0
        },
        {
            "product": "Producto 1",
            "warehouse": "Tienda",
            "stock": 10,
            "removed": 0
        },
        {
            "product": "Producto 2",
            "warehouse": "Tienda",
            "stock": 20,
            "removed": 0
        },
        {
            "product": "Producto 3",
            "warehouse": "Tienda",
            "stock": 30,
            "removed": 0
        },
        {
            "product": "Producto 4",
            "warehouse": "Tienda",
            "stock": 40,
            "removed": 0
        },
        {
            "product": "Producto 5",
            "warehouse": "Tienda",
            "stock": 50,
            "removed": 0
        },
    ],
    'Integration': [
        {
            "name": "API 1",
            "type": 1,
            "url": "http://api1.com",
            "token": "token1",
            "removed": 0
        },
        {
            "name": "API 2",
            "type": 1,
            "url": "http://api2.com",
            "token": "token2",
            "removed": 0
        },
    ],
    'Client':[
        {
            "name": "Cliente 1",
            "lastNames": "Apellidos 1",
            "email": "cliente1@example.com",
            "rut": "11111111-1",
            "phone": "11111111",
            "address": "Direccion 1",
            "city": "Ciudad 1",
            "country": "Pais 1",
            "removed": 0
        },
        {
            "name": "Cliente 2",
            "lastNames": "Apellidos 2",
            "email": "cliente2@example.com",
            "rut": "22222222-2",
            "phone": "22222222",
            "address": "Direccion 2",
            "city": "Ciudad 2",
            "country": "Pais 2",
            "removed": 0
        },
        {
            "name": "Cliente 3",
            "lastNames": "Apellidos 3",
            "email": "cliente3@example.com",
            "rut": "33333333-3",
            "phone": "33333333",
            "address": "Direccion 3",
            "city": "Ciudad 3",
            "country": "Pais 3",
            "removed": 0
        },
        {
            "name": "Cliente 4",
            "lastNames": "Apellidos 4",
            "email": "cliente4@example.com",
            "rut": "44444444-4",
            "phone": "44444444",
            "address": "Direccion 4",
            "city": "Ciudad 4",
            "country": "Pais 4",
            "removed": 0
        }
    ],
    'Sale': [
        {
            "client": "Cliente 1",
            "product": "Producto 1",
            "integration": "API 1",
            "removed": 0
        },
        {
            "client": "Cliente 2",
            "product": "Producto 2",
            "integration": "API 2",
            "removed": 0
        },
        {
            "client": "Cliente 3",
            "product": "Producto 3",
            "integration": "API 1",
            "removed": 0
        },
        {
            "client": "Cliente 4",
            "product": "Producto 4",
            "integration": "API 2",
            "removed": 0
        },
        {
            "client": "Cliente 1",
            "product": "Producto 5",
            "integration": "API 1",
            "removed": 0
        },
        {
            "client": "Cliente 2",
            "product": "Producto 1",
            "integration": "API 2",
            "removed": 0
        },
        {
            "client": "Cliente 3",
            "product": "Producto 2",
            "integration": "API 1",
            "removed": 0
        },
        {
            "client": "Cliente 4",
            "product": "Producto 3",
            "integration": "API 2",
            "removed": 0
        },
        {
            "client": "Cliente 1",
            "product": "Producto 4",
            "integration": "API 1",
            "removed": 0
        },
        {
            "client": "Cliente 2",
            "product": "Producto 5",
            "integration": "API 2",
            "removed": 0
        },
        {
            "client": "Cliente 3",
            "product": "Producto 1",
            "integration": "API 1",
            "removed": 0
        },
        {
            "client": "Cliente 4",
            "product": "Producto 2",
            "integration": "API 2",
            "removed": 0
        },
        {
            "client": "Cliente 1",
            "product": "Producto 3",
            "integration": "API 1",
            "removed": 0
        },
        {
            "client": "Cliente 2",
            "product": "Producto 4",
            "integration": "API 2",
            "removed": 0
        }
    ]
}