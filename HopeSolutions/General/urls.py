from django.urls import path, include

from . import views


urlpatterns = [
    path('products/', views.ProductListView.as_view(), name="products"),
]