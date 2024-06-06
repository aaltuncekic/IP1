import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-universities',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './universities.component.html',
  styleUrl: './universities.component.scss'
})
export class UniversitiesComponent {
  universiteler:any;
  ulke:any;
  isLogin:any =false;

  constructor(
    private apiService:ApiService,
    private router:Router
  ){
    this.checkLogin()
  }

  checkLogin(){
    //
    let login = localStorage.getItem("isLogin");
    if(login){
      this.isLogin = login
    }
    else{
      localStorage.setItem("isLogin",JSON.stringify(this.isLogin))
    }

    if(this.isLogin =="false"){
      alert("Kullanıcı girişi yap")
      this.router.navigate(['/login'])
    }

    console.log("Login Var mı?", login)
  }

  get(){
    this.apiService.getUniversities().subscribe((response:any)=>{
      this.universiteler = response
      console.log(this.universiteler)
    })

  }
  getCountry(){
    this.apiService.getCountryUni(this.ulke).subscribe((response:any)=>{
      this.universiteler = response
      console.log(this.universiteler)
    })
  }
}
