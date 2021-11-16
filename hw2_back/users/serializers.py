from rest_framework import serializers

from .models import UserInfo, GenderChoices
from .utils import ChoiceField


class UserSerializer(serializers.ModelSerializer):
    gender = ChoiceField(GenderChoices.choices())

    class Meta:
        model = UserInfo
        fields = "__all__"


class UserListSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ("id", "first_name", "last_name")
