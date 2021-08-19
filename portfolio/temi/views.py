from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def IndexView(request):

    return render(request, "temi/index.html")