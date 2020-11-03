export class Prueba {
    Valor1:number;
    Valor2:number;

    constructor(_Valor1:number, _Valor2:number){
        console.log('Iniciando Clase')
        this.Valor1 = _Valor1;
        this.Valor2 = _Valor2
    }

    Sumar(){
        return this.Valor1 + this.Valor2;
    }

    Restar(){
        return this.Valor1 - this.Valor2;
    }
}
