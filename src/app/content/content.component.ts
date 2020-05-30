import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() term:string;
  constructor(private service:ApiService) { 
    console.log('term: ' + this.term);

  }

  ngOnInit(): void {
  }



}
