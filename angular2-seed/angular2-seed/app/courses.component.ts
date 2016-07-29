import {Component} from 'angular2/core'
import {CourseService} from './course.service'

@Component
(
    {
        selector : 'courses',
        template : `<h2>{{title}}<h2>
        <div *ngFor="#course of courses">{{course}}</div>`,
        providers : [CourseService]
    }
)
export class CoursesComponent 
{
    title: string = "The title!!! ";
    courses: Array<string> = [];

    constructor(courseService : CourseService)
    {
        this.courses = courseService.getCourses();
    }
}