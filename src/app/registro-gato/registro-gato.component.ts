import { Component } from '@angular/core';

@Component({
  selector: 'app-registro-gato',
  imports: [],
  templateUrl: './registro-gato.component.html',
  styleUrl: './registro-gato.component.css'
})
export class RegistroGatoComponent {
  imagenURL: string | ArrayBuffer | null = '';

  previsualizarImagen(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagenURL = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }
  
}



