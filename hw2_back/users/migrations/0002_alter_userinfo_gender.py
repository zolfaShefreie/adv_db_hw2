# Generated by Django 3.2.9 on 2021-11-17 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='gender',
            field=models.CharField(choices=[('m', 'male'), ('f', 'female')], max_length=1),
        ),
    ]