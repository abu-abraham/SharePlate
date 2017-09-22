"""sharePlate_AbuTrial URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.contrib import admin
from sharePlate import views

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^userlist/', views.get_users),
    url(r'^purchases/', views.get_purchases),
    url(r'^spiceVal/(?P<uid>[0-9]+)/$', views.get_spiceValue),
    url(r'^itemlist/', views.get_items),
    url(r'^login/(?P<JSobject>.+)/$', views.update_userInfo),
    url(r'^item/(?P<JSobject>.+)/$', views.add_item),
    url(r'^items/(?P<uid>[0-9]+)/$', views.get_specific),
    url(r'^order/(?P<uid>[0-9]+)/(?P<item_id>[0-9]+)/$', views.set_order),
    url(r'^user/(?P<uid>[0-9]+)/$', views.get_userInfo),
]
