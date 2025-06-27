abstract class Calculo {
    public abstract calcular (numero1: number, numero2: number): number
}

class Somador extends Calculo{
    public calcular(numero1: number, numero2: number): number {
        return numero1 + numero2
    }
}

class Subtrador extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 - numero2
    }
}

class Divisor extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 / numero2
    }
}

class Multiplicador extends Calculo {
    public calcular(numero1: number, numero2: number): number {
        return numero1 * numero2
    }
}

export {Somador, Subtrador, Divisor, Multiplicador}