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
    category2 = models.CharField(max_length=255, null=True, blank=True)
    gender = models.CharField(max_length=255, null=True, blank=True)
    creationDate = models.DateTimeField()
    removed = models.BooleanField(default=False)
    inventoryUpdate = models.IntegerField(null=True, blank=True)
    inventoryUpdateDate = models.DateTimeField(null=True, blank=True)
    inventoryUpdateOrigin = models.CharField(max_length=255, null=True, blank=True)
    inventoryUpdateOriginDate = models.DateTimeField(null=True, blank=True)
    

    def __str__(self):
        return self.name
    

#BODEGA
class Warehouse(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    type = models.IntegerField()
    bsale = models.IntegerField()
    sync = models.IntegerField()
    removed = models.IntegerField()
    supplied = models.ForeignKey(
        "self", null=True, blank=True, on_delete=models.CASCADE
    )

    def __str__(self):
        return self.name
