export default class Cl_ventas {
    constructor(){
        this.contMenosDe100 = 0;
        this.contMasDe100 = 0;
        this.montoTotal = 0;
    }

    procesarVendedor(vendedor) {
        if(vendedor.montoVenta <= 100) {
            this.contMenosDe100++;
        } else {
            this.contMasDe100++;
        }
        this.montoTotal += vendedor.montoVenta;
    }

    ventasMenosDe100() {
        return this.contMenosDe100;
    }

    ventasMasDe100() {
        return this.contMasDe100;
    }

    ventasTotales() {
        return this.montoTotal;
    }
}