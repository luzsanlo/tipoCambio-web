export class TipoCambioDto {
  constructor(
    public monedaOrigen: number,
    public monedaDestino: number,
    public factor: number,
  ) {}
}
