import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder,  FormGroup,  FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginForm!:FormGroup

  constructor(
    private fb:FormBuilder,
    private router:Router
  ){
    this.createForm()
  }

  createForm(){
    this.loginForm = this.fb.group({
      username:['',[Validators.required,Validators.email]],
      password:['',Validators.required]
    })
  }

  onLogin(){
    if(this.loginForm.valid){

      let user = Object.assign({},this.loginForm.value)

      if(user.username=="a@a" && user.password=="123"){

        localStorage.setItem("isLogin","true")
        this.router.navigate(['/universiteler'])

      }
    }
    else{
      this.loginForm.markAllAsTouched()
    }

  }
}
