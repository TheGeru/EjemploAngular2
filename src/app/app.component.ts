import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from './dado/dado.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejemploAngular2';
  //
  resultado:string = '';
  valor1: number =  this.generarAleatorio();
  valor2: number = this.generarAleatorio();
  valor3: number =  this.generarAleatorio();
  //metodo que genera los numeros aleatorios del dado
  //entre 1 y 6
  generarAleatorio(){
    return Math.floor(Math.random() * 6) + 1;
  }

  //*FUNCION QUE HACE LA TIRADA Y VERIFICA EL RESULTADO
  tirarDados(){
    this.valor1 = this.generarAleatorio();
    this.valor2 = this.generarAleatorio();
    this.valor3 = this.generarAleatorio();

    if (this.valor1 == this.valor2 && this.valor1 == this.valor3) {
      this.resultado = 'FELICIDADES GANASTE WEEE :D';
    }else{
      this.resultado = 'FRACASADO INTENTA OTRA VEZ';
    }
  }

  //*COMPARAMOS SI LOS 3 SON IGUALES
  
}
