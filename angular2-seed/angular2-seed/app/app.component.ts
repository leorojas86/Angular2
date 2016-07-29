import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
import {AutoGrowDirective} from './autogrow.directive';

@Component({
    selector: 'my-app',
    template: '<h1>Angular 2 App</h1><input type="text" value="Test" autoGrow /><courses></courses><authors></authors>',
    directives : [CoursesComponent, AuthorsComponent, AutoGrowDirective]
})
export class AppComponent { }