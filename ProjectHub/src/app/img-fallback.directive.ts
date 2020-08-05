import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgFallback]'
})
export class ImgFallbackDirective {
  @Input() appImgFallback:string;
  constructor(private eRef:ElementRef) { }
  @HostListener('error')
  loadFallbackOnError(){
    // alert('hii')
    const element:HTMLImageElement=<HTMLImageElement>this.eRef.nativeElement;
    element.src=this.appImgFallback;
  }
}
