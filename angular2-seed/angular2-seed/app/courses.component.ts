import {Component} from 'angular2/core'

@Component
(
    {
        selector : 'courses',
        template : '<h2>{{title}}<h2>'
    }
)
export class CoursesComponent 
{
    title: string = "The title!!! ";
}