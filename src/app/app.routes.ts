import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaComponent } from './pagina/pagina.component'; // Ajusta la ruta según tu proyecto
import { InicioComponent } from './inicio/inicio.component';
import { RegistroGatoComponent } from './registro-gato/registro-gato.component';
import { ListaGatosComponent } from './lista-gatos/lista-gatos.component';
import { RegistroDuenoComponent } from './registro-dueno/registro-dueno.component';
import { AdopcionComponent } from './adopcion/adopcion.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },      // Ruta raíz: http://localhost:4200/
    { path: 'pagina', component: PaginaComponent },  // Ruta opcional: http://localhost:4200/pagina
    { path: 'registro-gato', component: RegistroGatoComponent },
    { path: 'lista-gatos', component: ListaGatosComponent },
    { path: 'registro-dueño', component: RegistroDuenoComponent },
    { path: 'adopcion', component: AdopcionComponent }
];