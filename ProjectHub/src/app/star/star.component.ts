import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit {
@Input() rating;
@Output() ratingChange = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  rate(r)
  {
    
    this.ratingChange.emit(r);
  }

}
