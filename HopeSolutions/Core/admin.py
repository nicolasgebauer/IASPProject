from django.contrib import admin

# Register your models here.

from .models import *

admin.site.register(Product)
admin.site.register(Warehouse)
admin.site.register(Inventory)
admin.site.register(Integration)
admin.site.register(Client)
admin.site.register(Sale)