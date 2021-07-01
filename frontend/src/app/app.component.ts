import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private dataService:DataService) {}
  title = 'posts';
  loading$=this.dataService.loading$;


  ngOnInit(){
    window.addEventListener("keyup", disableF5);
    window.addEventListener("keydown", disableF5);
  
   function disableF5(e) {
      if ((e.which || e.keyCode) == 116) e.preventDefault(); 
   };
 }
}
