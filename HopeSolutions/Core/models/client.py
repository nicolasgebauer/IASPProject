import uuid
from django.db import models

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