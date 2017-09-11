# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from models import Foodlist
from models import Users
from .serializer import UserSerializer
from serializer import FoodlistSerializer
from django.http import JsonResponse
from collections import namedtuple
import json
import datetime


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


"""Returns list of items available in the same organization as user"""

def get_specific(self,uid):
    queryset = Users.objects.get(uid=uid)
    org = queryset.organization
    collegues = Users.objects.filter(organization=org)
    items = Foodlist.objects.filter(chef_id__in = collegues)
    serializer = FoodlistSerializer(items,many=True)
    response = JsonResponse(serializer.data,safe=False)
    return response;

def set_order(self,uid,item_id):
    try:
        user = Users.objects.get(uid=uid)
        item = Foodlist.objects.get(item_id=item_id)
        item.count = item.count + 1
        #Item should have ID and a field to store customers
        item.save()
        seller = Users.objects.get(uid=item.chef_id.uid)
        seller.earnings = seller.earnings + item.price  #TO be changed to price once its there
        seller.save()
        x = {'result': 'success'}
        return JsonResponse(x)
    except:
        return JsonResponse({'result':'failure'})


def get_userInfo(self,uid):
    user = Users.objects.get(uid=uid)
    serializer = UserSerializer(user,many=False)
    response = JsonResponse(serializer.data)
    return response;

'''export interface UserDetails {
  id: string;
  name: string;
  picture_url: string;
  email: string;
  birthday: string;
  work: any;
  location: string;
  education: any;
}'''

def update_userInfo(self,JSobject):
    UserDetails = json.loads(JSobject, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
    uid = UserDetails.id

    try:
        user = Users.objects.get(uid=uid)
    except:
        username = UserDetails.name;
        email = UserDetails.email #Can be null
        organization = "ANU"
        image = UserDetails.picture_url
        p = Users(username=username,email=email,phone=12345678,rating=0.0,earnings=0.0,uid=uid,name=username,organization=organization,image=image);
        p.save();


    try:
        user = Users.objects.filter(uid=uid)
        return get_users(self);
    except:
        return get_users(self);

def add_item(self,JSobject):
    x = json.loads(JSobject, object_hook=lambda d: namedtuple('X', d.keys())(*d.values()))
    chef_id = x.chef_id

    try:
        user = Users.objects.get(uid=chef_id)
        spice_level = int(x.spice_level);
        count = x.count
        price = int(x.price)
        name = x.item_name
        item_id = str(int(x.price*x.spice_level))
        p = Foodlist(item_id=item_id,spice_level=spice_level,desc=name,count=count,item_image=None,availability=True,pub_date=datetime.date.today(),price=price,chef_id=user,event_time=datetime.datetime.now().time());
        p.save();

    except:
        return get_users(self);

    return get_items(self);
