# Generated by Django 4.2.2 on 2023-06-06 20:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='education',
            name='gpa',
            field=models.FloatField(blank=True, null=True),
        ),
    ]
