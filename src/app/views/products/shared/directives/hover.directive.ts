import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHover]'
})
export class HoverDirective {

    constructor(private el: ElementRef) {}

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight('green');
    }

    @HostListener('mouseleave') onmouseleave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}