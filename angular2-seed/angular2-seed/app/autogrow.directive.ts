import {Directive, ElementRef, Renderer} from 'angular2/core'

@Directive
(
    {
        selector : '[autoGrow]',
        host : 
        {
            '(focus)' : 'onFocus()'
        }
    }
)
export class AutoGrowDirective
{
    constructor(private element:ElementRef, private renderer:Renderer)
    {
    }

    onFocus()
    {
        this.renderer.setElementStyle(this.element.nativeElement, 'width', '3000');
    }
}