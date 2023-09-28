from django.shortcuts import render
from .serializers import WarehouseSerializer, IntegrationSerializer  
from rest_framework import permissions, views, status
from rest_framework.response import Response
from Core.models import Warehouse, Integration
class WarehouseListView(views.APIView):
    def get(self, request, format=None):
        warehouses = Warehouse.objects.all().order_by('name')

        serializer = WarehouseSerializer(warehouses, many=True)

        return Response({"warehouses": serializer.data}, status=status.HTTP_200_OK)

class IntegrationListView(views.APIView):
    def get(self, request, format=None):
        integrations = Integration.objects.all().order_by('name')

        serializer = IntegrationSerializer(integrations, many=True)

        return Response({"integrations": serializer.data}, status=status.HTTP_200_OK)
