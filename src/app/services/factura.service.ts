import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { factura } from '../models/factura.model';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  private baseUrl = 'https://localhost:your_port/api/factura';

  constructor(private http: HttpClient) { }

  // LEER LOS ELEMENTOS DESDE BD
  getAllFacturas(): Observable<factura[]> {
    return this.http.get<factura[]>(this.baseUrl);
  }
  // NUEVO
  createFactura(factura: factura): Observable<factura> {
    return this.http.post<factura>(this.baseUrl, factura);
  }
  // EDITAR
  editFactura(id: number, factura: factura): Observable<factura> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<factura>(url, factura);
  }
}
