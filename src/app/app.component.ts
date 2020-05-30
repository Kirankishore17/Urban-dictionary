import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Urban-Dictionary';
  word:string;

  newWord(val:string){
    this.word = val;
    console.log('app comp ' + this.word);
  }
}
