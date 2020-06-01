import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  result;
  data;
  word:string;
  count:number=0;
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
        // this.result.example = this.result.example.replace("\n","<br>")
        console.log(JSON.stringify(this.result));
        this.count = this.data.length > 0 ? 0 : -1;
        }
      );

  }
  reset() {
    this.count = -1;
    this.data = null;
  }

  next(){
    this.count = (this.count + 1)%this.data.length;
    this.result = this.data[this.count];
  }
}
