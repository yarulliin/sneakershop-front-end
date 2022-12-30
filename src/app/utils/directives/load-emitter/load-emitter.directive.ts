import { AfterViewInit, Directive, ElementRef, EventEmitter, Host, OnDestroy, Output } from '@angular/core';

@Directive({
  selector: '[appLoadEmitter]'
})
export class LoadEmitterDirective implements AfterViewInit, OnDestroy {
  @Output() public appLoadEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

  private observer: IntersectionObserver;

  constructor(
    @Host() private readonly elementRef: ElementRef
  ) {}

  public ngAfterViewInit(): void {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    };

    this.observer = new IntersectionObserver(this.callback.bind(this), options);
    this.observer.observe(this.elementRef.nativeElement);
  }

  public ngOnDestroy(): void {
    this.observer.disconnect();
  }

  private callback(entries: IntersectionObserverEntry[]): void {
    entries.forEach(entry => this.appLoadEmitter.emit(entry.isIntersecting));
  }
}
