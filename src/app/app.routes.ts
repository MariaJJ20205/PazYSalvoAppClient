import { Routes } from '@angular/router';
import { FacturasComponent } from './components/facturas/facturas.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {path: 'facturas', component: FacturasComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' }
];
