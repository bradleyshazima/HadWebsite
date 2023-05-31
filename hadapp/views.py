from django.shortcuts import render

from django.http import HttpResponse

# Create your views here.

def home(request):
    return render(request, 'hadapp/home.html')

def services(request):
    return render(request, 'hadapp/services.html')

def about(request):
    return render(request, 'hadapp/about.html')

def contact(request):
    return render(request, 'hadapp/contact.html')