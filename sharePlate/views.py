# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from models import Foodlist
from models import Users
from models import Purchases
from .serializer import UserSerializer
from serializer import FoodlistSerializer
from serializer import PurchasesSerializer
from django.http import JsonResponse
from collections import namedtuple
import json
import datetime
import sys
sys.path.append("/home/abu/Documents/Personal/SharePlate/services")
sys.path.append("/home/abu/Documents/Personal/SharePlate/data")
import input_cusine_mapper
import user_preference

def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def get_users(self):
    users = Users.objects.all()
    serializer = UserSerializer(users,many=True)
    response = JsonResponse(serializer.data,safe=False)
    return response;

def get_items(self):
    items = Foodlist.objects.all()
    serializer = FoodlistSerializer(items,many=True)
    response = JsonResponse(serializer.data,safe=False)
    return response;

def get_purchases(self):
    items = Purchases.objects.all()
    serializer = PurchasesSerializer(items,many=True)
    response = JsonResponse(serializer.data,safe=False)
    return response;


"""Returns list of items available in the same organization as user"""

def get_specific(self,uid):
    queryset = Users.objects.get(uid=uid)
    org = queryset.organization
    collegues = Users.objects.filter(organization=org)
    items = Foodlist.objects.filter(chef_id__in = collegues).exclude(count=0).filter(event_time__gte=datetime.datetime.now()).filter(pub_date=datetime.date.today());
    sorted_list = user_preference.get_sorted_list(items.values(),user_preference.spice_preference(uid));
    response = JsonResponse(sorted_list,safe=False)
    return response;

def set_order(self,uid,item_id):
    try:
        user = Users.objects.get(uid=uid)
        item = Foodlist.objects.get(item_id=item_id)
        item.count = item.count - 1
        item.save()
        seller = Users.objects.get(uid=item.chef_id.uid)
        seller.earnings = seller.earnings + item.price
        seller.save()
        maping = Purchases(user = user,item = item,completed = False);
        maping.save();
        x = {'result': 'success'}
        return JsonResponse(x)
    except:
        return JsonResponse({'result':'failure'})


def get_userInfo(self,uid):
    user = Users.objects.get(uid=uid)
    serializer = UserSerializer(user,many=False)
    response = JsonResponse(serializer.data)
    return response;


def update_userInfo(self,JSobject):
    UserDetails = json.loads(JSobject, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
    uid = UserDetails.id
    try:
        user = Users.objects.get(uid=uid)
    except:
        birthday = UserDetails.birthday;
        email = UserDetails.email;
        organization = UserDetails.work if UserDetails.work != "None" else UserDetails.education;
        name = UserDetails.name;
        location = UserDetails.location;
        image = UserDetails.picture_url;
        p = Users(birthday=birthday,email=email,phone=None,rating=0.0,earnings=0.0,uid=uid,name=name,organization=organization,image=image,location = location);
        p.save();
    try:
        user = Users.objects.filter(uid=uid)
        return get_specific(self,uid);
    except:
        return JsonResponse({'Error': 'error'});

def add_item(self,JSobject):
    x = json.loads(JSobject, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
    chef_id = x.chef_id

    try:
        user = Users.objects.get(uid=chef_id)
        spice_level = int(x.spice_level);
        count = x.count
        price = int(x.price)
        name = x.item_name
        cusine = input_cusine_mapper.cusine_mapper(name);
        item_id = str(int(x.price*x.spice_level))
        p = Foodlist(item_id=item_id,spice_level=spice_level,desc=name,count=count,item_image=None,availability=True,pub_date=datetime.date.today(),price=price,chef_id=user,event_time=datetime.datetime.now().time(),event_location = "ANU Library",cusine=cusine);
        p.save();

    except:
        return get_users(self);

    return get_items(self);

def get_spiceValue(self,uid):
    return JsonResponse({'val':user_preference.spice_preference(uid)})

def get_cusineValue(self,uid):
    return JsonResponse({'val':user_preference.user_cusine_scores(uid)})
