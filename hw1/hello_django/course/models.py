from django.db import models

# Create your models here.

from django.db import models

class Course(models.Model) :
    Department = models.CharField (max_length=100,blank=True)
    CourseTitle = models.CharField(max_length=100,blank=True)
    Instructor = models.CharField (max_length=100,blank=True)
    created_at = models.DateTimeField(auto_now_add=True)