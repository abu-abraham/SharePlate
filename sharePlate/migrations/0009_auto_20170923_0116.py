# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-23 01:16
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sharePlate', '0008_auto_20170922_2343'),
    ]

    operations = [
        migrations.AlterField(
            model_name='badge',
            name='badge',
            field=models.IntegerField(default=0),
        ),
    ]
