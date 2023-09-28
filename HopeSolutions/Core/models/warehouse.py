import uuid
from django.db import models

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
