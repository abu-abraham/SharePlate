# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-22 23:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sharePlate', '0006_foodlist_cusine'),
    ]

    operations = [
        migrations.AddField(
            model_name='purchases',
            name='review',
            field=models.CharField(default='good', max_length=500),
            preserve_default=False,
        ),
    ]
