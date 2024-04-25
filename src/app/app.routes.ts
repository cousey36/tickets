import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { RolesComponent } from './pages/roles/roles.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { ProductsComponent } from './pages/products/products.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { LoginComponent } from './pages/login/login.component';
import { MasterComponent } from './components/master/master.component';

export const routes: Routes = [
    {
        path: '', component: LoginComponent, pathMatch: 'full'
    },
    {
        path: '', component: MasterComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'contacts',
                loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule)
            },
            {
                path: 'accounts',
                loadChildren: () => import('./pages/accounts/accounts.module').then(m => m.AccountsModule)
            },
            {
                path: 'products',
                component: ProductsComponent
            },
            {
                path: 'roles',
                component: RolesComponent
            },
            {
                path: 'users',
                component: UsersComponent
            },
            {
                path: 'tickets',
                loadChildren: ()=> import('./pages/tickets/tickets.module').then(m => m.TicketsModule)
            }
        ]
    },
    {
        path: '**', component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { preloadingStrategy: NoPreloading })],
    exports: [RouterModule]
})
export class AppRoutingModule { }