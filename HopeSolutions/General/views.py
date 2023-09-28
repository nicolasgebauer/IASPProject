from django.shortcuts import render
from .serializers import ProductSerializer 
from rest_framework import permissions, views, status
from rest_framework.response import Response
from Core.models import Product # Importa el modelo Product

class ProductListView(views.APIView):
    def get(self, request, format=None):
        # Obtener la lista de productos desde la base de datos y ordenarlos por nombre
        products = Product.objects.all().order_by('name')

        serializer = ProductSerializer(products, many=True)

        return Response({"products": serializer.data}, status=status.HTTP_200_OK)