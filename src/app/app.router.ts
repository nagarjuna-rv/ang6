import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const router: Routes = [
    {
        path: '',
        redirectTo:'login',
        pathMatch: 'full'
    },
     {
        path: 'signup',
        component: SignupComponent 
    }, 
    {
        path: 'login',
        component: LoginComponent 
    }    
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });
