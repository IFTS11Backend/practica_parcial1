import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  verDatos(formulario: NgForm) {
    if (formulario.valid) {
      const datos = formulario.value;
      console.log(datos);
      alert(`Nombre y Apellido: ${datos.nombreCompleto}\nEdad: ${datos.edad}\nNacimiento: ${datos.nacimiento}\nSexo: ${datos.genero}\nFumador: ${datos.fumador}`);
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  limpiarCampos(formulario: NgForm) {
    formulario.resetForm();
  }

}
