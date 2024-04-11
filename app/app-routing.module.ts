import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MedicoComponent } from './components/medico/medico.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { AgregarPacienteComponent } from './components/agregar-paciente/agregar-paciente.component';
import { AgregarMedicoComponent } from './components/agregar-medico/agregar-medico.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';

//Rutas de navegacion
const routes: Routes = [
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'medico', component:MedicoComponent},
  {path: 'paciente', component:PacienteComponent},
  {path: 'usuario', component:UsuarioComponent},
  {path: 'agregarPaciente', component:AgregarPacienteComponent},
  {path: 'agregarMedico', component:AgregarMedicoComponent},
  {path: 'agregarUsuario', component:AgregarUsuarioComponent},
  {path: '**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
