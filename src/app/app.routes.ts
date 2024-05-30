import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { UniversitiesComponent } from './universities/universities.component';

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
        path:'**',
        redirectTo:'',
    }
    
];
