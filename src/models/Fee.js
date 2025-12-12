// src/models/Fee.js
// Nuevo tipo de movimiento: FEE (comisión)
import { Movement } from './Movement';

export class Fee extends Movement {
    constructor(data) {
        super(data);
        this.type = 'FEE';
    }

    getNetAmount() {
        // Siempre negativo
        return -Math.abs(this.amount);
    }

    getColor() {
        return '#FF9800';
    }

    getIcon() {
        return '💸';
    }
    getTypeName() {
        return 'Comisión';
    }
}
