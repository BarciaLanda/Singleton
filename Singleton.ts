
class Singleton {
    private static instance: Singleton | null = null;

    private constructor() {
        // Constructor privado para evitar la creación de instancias
    }

    public static getInstance(): Singleton {
        if (Singleton.instance === null) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }

    public greet(): void {
        console.log("¡Hola desde el Singleton!");
    }
}

export default Singleton;
