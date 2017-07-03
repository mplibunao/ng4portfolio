import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navClass: string = 'nav-list-close';

  toggleSideNav(): void{
    this.navClass === "nav-list-close" ? this.navClass = "nav-list-open" : this.navClass = "nav-list-close";
  }

}
