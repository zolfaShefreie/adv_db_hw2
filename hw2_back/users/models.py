from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import RegexValidator
from .utils import Enum


class GenderChoices(Enum):
    male = 'm'
    female = 'f'


class UserInfo(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birthday = models.DateField()
    phone = models.CharField(max_length=20, validators=[RegexValidator(regex=r'^\d{3,20}$',
                                                                       message="invalid phone format")])
    address = models.TextField()
    gender = models.CharField(max_length=1, choices=GenderChoices.choices())



