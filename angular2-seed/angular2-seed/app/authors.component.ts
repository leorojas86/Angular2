import {Component} from 'angular2/core'
import {AuthorService} from './author.service'

@Component
(
    {
        selector: "authors",
        template:`<h1>authors<h1>
        <div *ngFor="#author of authors">{{author}}</div>`,
        providers : [AuthorService]
    }
)
export class AuthorsComponent
{
    authors : Array<string> = [];

    constructor(authorsService : AuthorService)
    {
        this.authors = authorsService.getAuthors();
    }
}