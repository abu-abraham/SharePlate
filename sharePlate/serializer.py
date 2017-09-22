from models import Users
from models import Foodlist
from models import Purchases
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users;
        fields = ('birthday','uid','email','rating','phone','earnings','organization','name','image','location');

class FoodlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Foodlist;
        fields = ('item_id','desc','spice_level','count','availability','pub_date','item_image','price','chef_id','event_time','event_location','cusine');


class PurchasesSerializer(serializers.ModelSerializer):

    class Meta:
        model = Purchases;
        fields = ('user','item','completed');
