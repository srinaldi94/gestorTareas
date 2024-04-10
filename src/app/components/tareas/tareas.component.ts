import { Component } from '@angular/core';
import { Tarea } from '../../models/Tarea';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tareas.component.html',
  styleUrl: './tareas.component.css'
})
export class TareasComponent {

  listaTareas: Tarea[] = [];
  nombreTarea: string = "";

  agregarTarea(): void{
    const tarea: Tarea = {
      nombre:this.nombreTarea,
      estado:false
    }
    this.listaTareas.push(tarea);
    this.nombreTarea = "";
  }

  eliminarTarea(index: number): void{
    this.listaTareas.splice(index,1);
  }

  actualizarTarea(tarea: Tarea, index: number): void{
    this.listaTareas[index].estado = !tarea.estado
  }

}
