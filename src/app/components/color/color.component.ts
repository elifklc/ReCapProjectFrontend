import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/entities/color';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors:Color[] = [];
  dataLoaded = false;
  constructor() { }

  ngOnInit(): void {
  }

}
