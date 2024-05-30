import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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

  constructor(
    private apiService:ApiService
  ){
    // this.get()
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
