import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";

import {HomepageComponent} from "./homepage/homepage.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {InventoryComponent} from "./inventory/inventory.component";

const routes: Routes = [
  {path: '', redirectTo: '/homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inventory', component: InventoryComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
