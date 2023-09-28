import uuid
from django.db import models

# MODELOS NECESARIOS PARA IMPLEMENTAR IDEA DE NEGOCIO

#PRODUCTO
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    parentSKU = models.CharField(max_length=255, null=True, blank=True)
    SKU = models.CharField(max_length=255)
    barCode = models.CharField(max_length=255, null=True, blank=True)
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    cost = models.DecimalField(max_digits=10, decimal_places=2)
    size = models.CharField(max_length=255, null=True, blank=True)
    category2 = models.CharField(max_length=255, null=True, blank=True)
    gender = models.CharField(max_length=255, null=True, blank=True)
    creationDate = models.DateTimeField()
    removed = models.BooleanField(default=False)
    inventoryUpdate = models.IntegerField(null=True, blank=True)
    inventoryUpdateDate = models.DateTimeField(null=True, blank=True)    

    def __str__(self):
        return self.name
    

#BODEGA (o tienda fisica)
class Warehouse(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    type = models.IntegerField()
    integration_id = models.IntegerField()
    sync = models.IntegerField()
    removed = models.IntegerField()
    supplied = models.ForeignKey(
        "self", null=True, blank=True, on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name

#INVENTARIO
class Inventory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    stock = models.IntegerField()
    removed = models.BooleanField(default=False)

    def __str__(self):
        return self.product.name
    
#INTEGRACION (APIs que debe consumir el negocio, En este caso APIs ficticias)
class Integration(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    type = models.IntegerField()
    url = models.CharField(max_length=255)
    token = models.CharField(max_length=255)
    removed = models.BooleanField(default=False)

    def __str__(self):
        return self.name
    
#CLIENTE
class Client(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    lastName = models.CharField(max_length=255)
    rut = models.CharField(max_length=255)
    email = models.CharField(max_length=255)
    phone = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    creationDate = models.DateTimeField()
    removed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.name} {self.lastName}'
    
#VENTA
class Sale(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    integration = models.ForeignKey(Integration, on_delete=models.CASCADE)
    creationDate = models.DateTimeField()
    removed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.id} - {self.client.name} {self.client.lastName}'
    
