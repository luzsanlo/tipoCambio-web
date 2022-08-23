export class RequestDto {
  constructor(
    public monedaOrigen: number,
    public monedaDestino: number,
    public cantidad: number,
  ) {}
}
