import { Avion } from "./Avion";

/**
 * Colección de aviones históricos.
 * Actúa como clase contenedora (objeto madre) de múltiples instancias de Avion.
 */
export class ColeccionDeAviones {
  private aviones: Avion[] = [];

  agregar(avion: Avion): void {
    this.aviones.push(avion);
  }

  obtenerTodos(): Avion[] {
    return this.aviones;
  }

  cantidad(): number {
    return this.aviones.length;
  }

  obtenerPorIndice(indice: number): Avion | undefined {
    return this.aviones[indice];
  }
}
