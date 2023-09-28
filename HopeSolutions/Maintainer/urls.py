from django.urls import path, include

from . import views


urlpatterns = [
    path('integrations/', views.IntegrationListView.as_view(), name="integrations"),
    path('warehouses/', views.WarehouseListView.as_view(), name="warehouses"),
]