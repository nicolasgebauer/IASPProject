from rest_framework import serializers

from Core.models import Integration


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Integration
        fields = '__all__'