from django.contrib import admin
from .models import Product

class dressadmin(admin.ModelAdmin):
    list_display = ("name","price","size","image")

admin.site.register(Product,dressadmin)

# Register your models here.
