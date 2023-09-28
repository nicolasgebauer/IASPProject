from django.urls import path, include

from . import views


urlpatterns = [
    path('sales/', views.SalesListView.as_view(), name="sales"),
]