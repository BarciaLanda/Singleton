"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Singleton = /** @class */ (function () {
    function Singleton() {
        // Constructor privado para evitar la creación de instancias
    }
    Singleton.getInstance = function () {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.greet = function () {
        console.log("¡Hola desde el Singleton!");
    };
    Singleton.instance = null;
    return Singleton;
}());
exports.default = Singleton;
