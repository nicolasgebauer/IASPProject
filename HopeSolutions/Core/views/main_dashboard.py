from django.http import HttpResponse
from django.shortcuts import render, redirect
from django.views import View

class MainDashboardView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'main_dashboard.html', {})
