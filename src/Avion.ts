/**
 * Representa un avión histórico con sus características principales.
 */
export class Avion {
  nombre: string;
  pais: string;
  anioIntroduccion: number;
  tipoPropulsion: "pistón" | "jet" | "turbohélice" | "cohete";

  constructor(
    nombre: string,
    pais: string,
    anioIntroduccion: number,
    tipoPropulsion: "pistón" | "jet" | "turbohélice" | "cohete"
  ) {
    this.nombre = nombre;
    this.pais = pais;
    this.anioIntroduccion = anioIntroduccion;
    this.tipoPropulsion = tipoPropulsion;
  }

  descripcion(): string {
    return `${this.nombre} (${this.pais}, ${this.anioIntroduccion}) - ${this.tipoPropulsion}`;
  }
}
