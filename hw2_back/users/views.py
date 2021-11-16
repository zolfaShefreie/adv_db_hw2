from rest_framework.viewsets import ModelViewSet

from . import models
from . import serializers


class UserViewSet(ModelViewSet):
    queryset = models.UserInfo.objects.all()
    http_method_names = ['get', 'post', 'put', 'patch', 'delete']

    def get_serializer_class(self):
        if self.action == "list":
            return serializers.UserListSerializer
        return serializers.UserSerializer
