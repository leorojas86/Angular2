import {Component} from 'angular2/core'

@Component
(
    {
        selector : 'courses',
        template : `<h2>{{title}}<h2>
        <div *ngFor="#course of courses">{{course}}</div>`
    }
)
export class CoursesComponent 
{
    title: string = "The title!!! ";
    courses: Array<string> = ["Course1", "Course2", "Course3"];
}