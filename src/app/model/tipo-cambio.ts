import {Moneda} from "./moneda";

export interface TipoCambio {
  id: number;
  monedaOrigen: Moneda;
  monedaDestino: Moneda;
  factor: number;
}
