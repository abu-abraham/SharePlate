# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-20 22:13
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sharePlate', '0003_foodlist_event_location'),
    ]

    operations = [
        migrations.AddField(
            model_name='foodlist',
            name='cusine',
            field=models.CharField(default='Indian', max_length=50),
            preserve_default=False,
        ),
    ]
