import { Component, Inject  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FacturaService } from '../../services/factura.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-formulario-factura',
  standalone: true,
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './formulario-factura.component.html',
  styleUrl: './formulario-factura.component.css'
})
export class FormularioFacturaComponent {

  formData: any = {};
  facturaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
  ) {
    this.facturaForm = this.fb.group({
      saldo: ['', Validators.required],
      clienteId: ['', Validators.required],
      servicioAdquiridoId: ['', Validators.required],
      medioDePagoId: ['', Validators.required],
      estadoId: ['', Validators.required]
    });
  }

  guardarFactura() {

    console.log('datos del formulario: ', this.formData);

    if (this.facturaForm.valid) {
      // this.facturaService.guardarFactura(this.facturaForm.value)
      //   .subscribe(
      //     () => {
      //       console.log('Factura guardada exitosamente');
      //     },
      //     error => {
      //       console.error('Error al guardar la factura:', error);
      //     }
      //   );
    } else {
      console.error('Formulario no válido');
    }

  }
}