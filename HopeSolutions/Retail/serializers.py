from rest_framework import serializers
from Core.models import Sale

class SalesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sale
        fields = [
            "client",
            "product",
            "integration",
            "creationDate",
        ]