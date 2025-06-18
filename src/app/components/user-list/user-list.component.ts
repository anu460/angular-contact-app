import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
userData: any;
constructor(private usersev:UserService){}  

ngOnInit(){
this.usersev.getUserList().subscribe(response=>{
  this.userData=response;
})
}
}
