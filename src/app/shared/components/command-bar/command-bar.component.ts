import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-command-bar',
  templateUrl: './command-bar.component.html',
  styleUrls: ['./command-bar.component.css']
})
export class CommandBarComponent {
public addData():void{

}
constructor(private router: Router){}

goToForm(pageName: string): void {
  this.router.navigate([`${pageName}`]);
}

}
