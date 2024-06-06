import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UniversitiesComponent } from './universities/universities.component';
import { LoginComponent } from './pages/login/login.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'hakkimda',
        component:AboutComponent
    },
    {
        path:'universiteler',
        component:UniversitiesComponent
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'**',
        redirectTo:'',
    }
    
];
