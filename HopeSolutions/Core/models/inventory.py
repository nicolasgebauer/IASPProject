import uuid
from django.db import models
from Core.models import Product, Warehouse

class Inventory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    warehouse = models.ForeignKey(Warehouse, on_delete=models.CASCADE)
    stock = models.IntegerField()
    removed = models.BooleanField(default=False)

    def __str__(self):
        return self.product.name