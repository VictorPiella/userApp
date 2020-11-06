import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  register( form: NgForm ) {

    this.userService.register(form.value).subscribe(response => {
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
