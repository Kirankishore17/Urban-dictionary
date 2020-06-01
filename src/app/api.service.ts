import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getResult(word: string) {
    console.log(word);
    return this.http.get(`https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=${word}`,
            {headers:
              {"x-rapidapi-host": "mashape-community-urban-dictionary.p.rapidapi.com",
              "x-rapidapi-key": "aea9559aa1msh5b956b19e632e92p1bb553jsn24af3d2c0d36"}
            }
            );
  }

  constructor(private http:HttpClient) { }
}
