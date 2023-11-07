"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Main.ts
var Singleton_1 = require("./Singleton");
// Uso del Singleton
var singletonInstance1 = Singleton_1.default.getInstance();
var singletonInstance2 = Singleton_1.default.getInstance();
console.log(singletonInstance1 === singletonInstance2); // Debería imprimir true
singletonInstance1.greet(); // Debería mostrar el saludo en la consola
