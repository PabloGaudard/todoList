import { Routes } from '@angular/router';
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';

export const routes: Routes = [

    { path: '', component: HomeComponent},
    { path: 'sobre', component: AboutComponent}

];
