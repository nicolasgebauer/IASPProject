# En serializers.py de la aplicación Core
from rest_framework import serializers
from Core.models import Product, Inventory

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = [
            "parentSKU",
            "SKU",
            "barCode",
            "name",
            "category",
            "category2",
            "price"
        ]
class InventorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inventory
        fields = [
            "product",
            "warehouse",
            "stock",
        ]