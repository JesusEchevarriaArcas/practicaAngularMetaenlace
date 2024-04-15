import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicoComponent } from './components/medico/medico.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { CitaComponent } from './components/cita/cita.component';
import { DiagnosticoComponent } from './components/diagnostico/diagnostico.component';

//Rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'medico', component:MedicoComponent},
  {path: 'paciente', component:PacienteComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'cita', component:CitaComponent},
  {path: 'diagnostico', component:DiagnosticoComponent},
  {path: '**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
