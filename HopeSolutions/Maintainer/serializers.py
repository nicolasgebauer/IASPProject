from rest_framework import serializers
from Core.models import Warehouse, Integration

class WarehouseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Warehouse
        fields = [
            "name",
            "type",
            "integration_id",
        ]

class IntegrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Integration
        fields = [
            "name",
            "type",
        ]