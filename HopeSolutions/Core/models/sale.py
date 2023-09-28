import uuid
from django.db import models
from Core.models import Client, Product, Integration

class Sale(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    integration = models.ForeignKey(Integration, on_delete=models.CASCADE)
    creationDate = models.DateTimeField()
    removed = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.id} - {self.client.name} {self.client.lastName}'