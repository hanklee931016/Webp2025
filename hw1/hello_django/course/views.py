#from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class HelloApiView(APIView):
    def get(self, request):
        my_name = request.GET.get('name' , None)
        if my_name:
            retValue = {}
            retValue['data'] = "Hello" + my_name
            return Response(retValue,status=status.HTTP_200_Ok)
        else:
            return Response(
                {"res": "parameter: name is None"},
                status=status.HTTP_400_BAD_REQUEST
            )



from rest_framework import status
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.core.serializers.json import DjangoJSONEncoder
import json 
import logging

from .models import Course

logger = logging.getLogger('django')

@api_view(['GET'])
def add_post(request):
    Department = request.GET.get('Department' , '系所')
    CourseTitle = request.GET.get('CourseTitle' , '課程')
    Instructor = request.GET.get('Instructor' , '講師')

    new_course = Course ()
    new_course.Department = Department
    new_course.CourseTitle = CourseTitle
    new_course.Instructor = Instructor
    new_course.save()
    logger.debug(" ************** course_api: " + Department)
    if Department:
        return JsonResponse ({"data": Department + " insert!"}, status=status.HTTP_200_OK)
    else:
        return JsonResponse(
            {"res" : "parameter: name is None"},
            status=status.HTTP_400_BAD_REQUEST
        )

@api_view(['GET'])
def list_post(request):
    courses = Course.objects.values()
    return JsonResponse(list(courses), safe=False, json_dumps_params={'ensure_ascii': False})
    #return Response ({"data":
    #                 json.dump(
    #                    list(posts),
    #                    sort_key = True,
    #                    indent = 1,
    #                    cls = DjangoJSONEncoder)},
    #                status=status.HTTP_200_OK)