from django.urls import path, include

from . import views


urlpatterns = [
    path('products/', views.ProductListView.as_view(), name="products"),
    path('inventory/', views.InventoryListView.as_view(), name="inventory"),
]