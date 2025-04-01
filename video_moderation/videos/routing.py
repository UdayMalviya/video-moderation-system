from django.urls import path
from .consumers import LiveStreamConsumer

websocked_urlpattens = [
    path('ws/live/', LiveStreamConsumer.as_asgi()),
]