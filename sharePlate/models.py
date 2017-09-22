# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# -*- coding: utf-8 -*-

from django.db import models

# Create your models here.
# -*- coding: utf-8 -*-

from django.db import models

class Users (models.Model):
    birthday = models.CharField(max_length=15,null=True);
    email = models.EmailField();
    phone = models.CharField(max_length=12);
    rating = models.FloatField();
    earnings = models.FloatField();
    uid = models.CharField(unique=True,max_length=30);
    name = models.CharField(max_length=25);
    organization = models.CharField(max_length=25);
    image = models.URLField();
    location = models.CharField(max_length=50);

    def __str__(self):
        return self.name;


class Foodlist (models.Model):
    item_id = models.CharField(max_length=30)
    desc = models.CharField(max_length=100);
    spice_level = models.FloatField();
    count = models.IntegerField();
    item_image = models.ImageField();
    availability = models.BooleanField(default=True);
    pub_date = models.DateField();
    price = models.FloatField();
    chef_id = models.ForeignKey(Users,on_delete=models.CASCADE);
    event_time = models.TimeField();
    event_location = models.CharField(max_length=50);
    cusine = models.CharField(max_length=50,null=True)


    def __str__(self):
        return self.item_name;

"""Self learning model, to be encorporated in next stage"""

class UserPreference(models.Model):
    user = models.ForeignKey(Users,on_delete=models.CASCADE)
    user_spice_level = models.FloatField();
    prefered_cost = models.FloatField();
    prefered_time = models.TimeField();

class Purchases (models.Model):
    user = models.ForeignKey(Users,on_delete=models.CASCADE)
    item = models.ForeignKey(Foodlist,on_delete=models.CASCADE)
    completed = models.BooleanField(default=False);

class Badge (models.Model):
    user = models.ForeignKey(Users,on_delete=models.CASCADE)
    badge = models.CharField(max_length=15);




#Can mark completed either by getting the location info or by time!


# Create your models here.
