from models import Users
from models import Foodlist
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = Users;
        fields = ('username','uid','email','rating','phone','earnings','organization','name','image');

class FoodlistSerializer(serializers.ModelSerializer):

    class Meta:
        model = Foodlist;
        fields = ('item_id','desc','spice_level','count','availability','pub_date','item_image','price','chef_id','event_time');


