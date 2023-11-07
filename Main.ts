// Main.ts
import Singleton from './Singleton';

// Uso del Singleton
const singletonInstance1 = Singleton.getInstance();
const singletonInstance2 = Singleton.getInstance();

console.log(singletonInstance1 === singletonInstance2); // Debería imprimir true

singletonInstance1.greet(); // Debería mostrar el saludo en la consola
