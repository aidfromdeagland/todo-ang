import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() body: string;
  @Input() link: string;

  @Output() deleteCardEvent: EventEmitter<void> = new EventEmitter();

  @ViewChild('truncator') truncator: ElementRef<HTMLElement>;
  @ViewChild('bodyText') bodyText: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const bodyTextStyle = window.getComputedStyle(this.bodyText.nativeElement);
    const viewAbleHeight = parseInt(bodyTextStyle.getPropertyValue('height'), 10);

    if (this.bodyText.nativeElement.scrollHeight > viewAbleHeight) {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.truncator.nativeElement, 'display', 'none');
    }
  }

  onDeleteClick(): void {
    this.deleteCardEvent.emit();
  }
}
