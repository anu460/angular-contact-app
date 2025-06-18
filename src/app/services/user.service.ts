import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
getUrl='https://jsonplaceholder.typicode.com/users';
  constructor(private http:HttpClient) { 
    
  }

  getUserList(){
    return this.http.get(this.getUrl);
  }
}
