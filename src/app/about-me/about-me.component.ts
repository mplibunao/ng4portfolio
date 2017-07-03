import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  // Stores the class name for img
  imgEffect: string = "imgMouseLeave";

  imgToggleEffect(): void{
    this.imgEffect === "imgMouseLeave" ? this.imgEffect = "imgMouseEnter" : this.imgEffect = "imgMouseLeave";
  }

  constructor() { }

  ngOnInit() {
  }

}
