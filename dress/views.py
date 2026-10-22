
from django.shortcuts import render
from django.http import JsonResponse
from .models import Product


def home(request):
    products = Product.objects.all()
    return render(request, "home.html", {"products": products})


def shop(request):
    products = Product.objects.all()
    return render(request, "index.html", {"products": products})


def about(request):
    return render(request, "about.html")


def contact(request):
    return render(request, "contact.html")


def product_page(request):
    return render(request, "product.html")



def product_api(request):
    data = []

    for p in Product.objects.all():
        image_url = ""

        if p.image:
            image_value = str(p.image.name)

            if image_value.startswith("http://") or image_value.startswith("https://"):
                image_url = image_value
            else:
                image_url = request.build_absolute_uri(p.image.url)

        data.append({
            "id": p.id,
            "name": p.name,
            "price": str(p.price),
            "size": p.size,
            "image": image_url,
        })

    return JsonResponse(data, safe=False)
