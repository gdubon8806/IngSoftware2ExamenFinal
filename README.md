Refactorización: Patrón Factory y Principio OCP

Justificación técnica

Se refactorizó la creación de movimientos usando el patrón Factory Method para eliminar el acoplamiento entre la UI y las clases concretas de movimientos. Ahora, la UI solo conoce una función de fábrica (createMovement) y nunca instancia clases concretas ni discrimina tipos con switch o if. Se escogio este mas que todo porque este patron se usa mucho en este tipo de escenarios para quitar ifs y switches que renderizen cosas diferentes en base a la condicion o valor de algo

Esto mejora la cohesión y quita  el acoplamiento porque:
- Toda la lógica de creación está centralizada en la fábrica.
- La UI solo depende de la abstracción (Movement), no de implementaciones concretas.
- Permite cumplir el Principio de Abierto/Cerrado (OCP): el sistema es abierto a extensión (nuevos tipos de movimientos) pero cerrado a modificación (no hay que cambiar la UI ni el resto del sistema para soportar nuevos tipos).

 ¿Cómo agregar un nuevo tipo de movimiento? (OCP)
1. Crear una nueva clase en src/models/ que extienda de Movement e implemente los métodos requeridos.
2. Registrar la nueva clase en src/models/MovementFactory.js agregando una línea en el objeto movementTypes.
3. (Opcional) Agregar datos de ejemplo en src/data/movements.js.
4. ¡Listo! La UI lo soporta automáticamente, sin cambios adicionales.

Ejemplo de nuevo tipo: FEE
- Se creó la clase Fee en src/models/Fee.js.
- Se registró en la fábrica.
- Se agregó un movimiento de tipo fee en los datos.
- La UI lo muestra automáticamente.

 Instrucciones para correr el proyecto
1. Instala dependencias:
	npm install

2. Ejecuta la app en modo desarrollo:
	npm run dev
