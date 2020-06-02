import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  result:any;
  data:any;
  word:string='';
  count:number=0;
  status:boolean = true;

  constructor(private service:ApiService) { 

  }

  ngOnInit(): void {
  }

  onSearch(){
    this.reset();
    this.service.getResult(this.word).subscribe(
      data => {
        this.data = data["list"];
        this.result = this.data[0];
        if(this.result !== undefined){
          this.count = this.data.length > 0 ? 0 : -1;
          this.status = true;
        }
        else{
          this.status = false;
        }
        }
      );
  }
  reset() {
    this.count = -1;
    this.data = null;
    this.status = false;

  }

  next(){
    this.count = (this.count + 1)%this.data.length;
    this.result = this.data[this.count];
  }
}
