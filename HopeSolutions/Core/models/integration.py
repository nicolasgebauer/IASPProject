import uuid
from django.db import models

class Integration(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=255)
    type = models.IntegerField()
    url = models.CharField(max_length=255)
    token = models.CharField(max_length=255)
    removed = models.BooleanField(default=False)

    def __str__(self):
        return self.name