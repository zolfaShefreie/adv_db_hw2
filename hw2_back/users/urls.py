from django.urls import path

from .views import UserViewSet

urlpatterns = [
    path("user-info/", UserViewSet.as_view({
        "post": "create"
    })),
    path("user-info/<int:pk>/", UserViewSet.as_view({
        'put': 'update',
        'get': 'retrieve',
        'patch': 'partial_update',
        'delete': 'destroy'
    })),
    path("user-info/list/", UserViewSet.as_view({
        "get": "list"
    }))
]
