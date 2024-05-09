import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { FacturaService } from '../../services/factura.service';
import { factura } from '../../models/factura.model';

const FACTURAS: factura[] = [
  { saldo: 100, clienteId: 1, servicioAdquiridoId: 101, medioDePagoId: 201, estadoId: 301 },
  { saldo: 150, clienteId: 2, servicioAdquiridoId: 102, medioDePagoId: 202, estadoId: 302 },
  { saldo: 200, clienteId: 3, servicioAdquiridoId: 103, medioDePagoId: 203, estadoId: 303 },
  { saldo: 250, clienteId: 4, servicioAdquiridoId: 104, medioDePagoId: 204, estadoId: 304 },
  { saldo: 300, clienteId: 5, servicioAdquiridoId: 105, medioDePagoId: 205, estadoId: 305 }
];

@Component({
  selector: 'app-facturas',
  standalone: true,
  imports: [
    MatTableModule,
    CommonModule
  ],
  templateUrl: './facturas.component.html',
  styleUrl: './facturas.component.css'
})

export class FacturasComponent {
  // displayedColumns: string[] = ['saldo', 'cliente', 'servicio', 'medio de pago', 'estado', 'opciones'];
  dataSource = FACTURAS;

  constructor(private facturaService: FacturaService) { }

  ngOnInit(): void {
    this.cargarFacturas();
  }

  cargarFacturas(): void {
    this.facturaService.getAllFacturas().subscribe(
      (data) => {
        this.dataSource = data;
      },
      (error) => {
        console.error('Error al cargar las facturas:', error);
      }
    );
  }
}
