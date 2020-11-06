import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router
              ) { }

  ngOnInit(): void {
  }

  logIn( form: NgForm ) {

    this.userService.logIn(form.value).subscribe(response => {
      console.log(response.status);
      console.log(response.body);
      if(response.status === 200){
        this.router.navigate(['/user-list']);
      }
      else{
        this.router.navigate(['/error/'+ response.status]);
      }
      
      });
  }

}


