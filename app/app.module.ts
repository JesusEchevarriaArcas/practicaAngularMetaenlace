import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { MedicoComponent } from './components/medico/medico.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AgregarMedicoComponent } from './components/agregar-medico/agregar-medico.component';
import { AgregarPacienteComponent } from './components/agregar-paciente/agregar-paciente.component';
import { AgregarUsuarioComponent } from './components/agregar-usuario/agregar-usuario.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PacienteComponent,
    MedicoComponent,
    NavmenuComponent,
    PagenotfoundComponent,
    AgregarMedicoComponent,
    AgregarPacienteComponent,
    AgregarUsuarioComponent,
    UsuarioComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [
    provideClientHydration(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
