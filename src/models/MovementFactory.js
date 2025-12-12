// esta es la fabrica para crear instancias de movimientos
import { Deposit } from './Deposit';
import { Withdrawal } from './Withdrawal';
import { Payment } from './Payment';
import { Transfer } from './Transfer';
import { Fee } from './Fee';

const movementTypes = {
    DEPOSIT: Deposit,
    WITHDRAWAL: Withdrawal,
    PAYMENT: Payment,
    TRANSFER: Transfer,
    FEE: Fee,
    // En terminos de OCP: aquí se agregan nuevos tipos
};


//FACTORY
//aqui esta la funcion que crea los movimientos o sea factory
export function createMovement(type, data) {
    const MovementClass = movementTypes[type];
    if (!MovementClass) throw new Error(`Tipo de movimiento desconocido!`);
    return new MovementClass(data);
}

// En OCP esto es exportar función para registrar nuevos tipos
export function registerMovementType(type, MovementClass) {
    movementTypes[type] = MovementClass;
}
