import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserModel[] = [];
  updateUser: UserModel;
  total_page;
  editModal= false;
  page = 1;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers(){
    this.userService.getUsers(this.page)
      .subscribe ( (resp: any) =>{
        this.users = resp.data;
        this.total_page = resp.total_pages;
      })
  }

  deleteUser( user: UserModel, i: number) {
    this.users.splice(i , 1);
    this.userService.deleteUser( user ).subscribe(response => {
    console.log(response.status);
    });
  }

  pagination(position: string){
    if(position === "next"){
      if(this.page < this.total_page){
        this.page++;
        console.log(this.page);
        this.getUsers();
      }
    }else{
      if(this.page > 1){
        this.page--;
        console.log(this.page);
        this.getUsers();
      }
    }
  }
  editUser( user: UserModel, i: number ) {
    this.editModal= true;
    this.updateUser = user;
    this.users[i] = this.updateUser;
  }
  updateChangesUser(){
    this.userService.updateUser(this.updateUser).subscribe(response => {
      console.log(response.status);
      });
      this.editModal= false;
  }


}
