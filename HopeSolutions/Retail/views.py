from django.shortcuts import render
from .serializers import SalesSerializer
from rest_framework import permissions, views, status
from rest_framework.response import Response
from Core.models import Sale

class SalesListView(views.APIView):
    def get(self, request, format=None):
        sales = Sale.objects.all()

        serializer = SalesSerializer(sales, many=True)

        return Response({"sales": serializer.data}, status=status.HTTP_200_OK)