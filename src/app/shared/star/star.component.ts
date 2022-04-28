import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  @Input() rating=2.5;
  cropwidth=0;
  
  constructor() { 
     this.cropwidth=this.rating *75/5
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.cropwidth=this.rating *15;
  }

 
  ngOnInit(): void {
  }

}
