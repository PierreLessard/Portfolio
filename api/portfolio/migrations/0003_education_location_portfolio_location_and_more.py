# Generated by Django 4.2.2 on 2023-06-06 21:00

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_education_gpa'),
    ]

    operations = [
        migrations.AddField(
            model_name='education',
            name='location',
            field=models.CharField(default='Toronto, ON', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='portfolio',
            name='location',
            field=models.CharField(default='Toronto, ON', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='portfolio',
            name='years',
            field=models.CharField(default='Apr. 2023 – Present', max_length=25),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='work',
            name='location',
            field=models.CharField(default='Toronto, ON', max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='work',
            name='position',
            field=models.CharField(default='Developer', max_length=255),
            preserve_default=False,
        ),
    ]
