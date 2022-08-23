import {Component, OnInit} from '@angular/core';
import {MonedaService} from "./services/moneda.service";
import {Moneda} from "./model/moneda";
import {DialogService} from "primeng/dynamicdialog";
import {CreateMonedaComponent} from "./components/modal/moneda/create-moneda/create-moneda.component";
import {MonedaDto} from "./dto/moneda-dto";
import {TipoCambio} from "./model/tipo-cambio";
import {TipoCambioService} from "./services/tipo-cambio.service";
import {TipoCambioComponent} from "./components/modal/tipo-cambio/tipo-cambio/tipo-cambio.component";
import {TipoCambioDto} from "./dto/tipo-cambio-dto";
import {FormBuilder, Validators} from "@angular/forms";
import {RequestDto} from "./dto/request-dto";
import {Response} from "./model/response";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [DialogService],
})
export class AppComponent implements OnInit {

  items: Moneda[] = [];
  tiposCambio: TipoCambio[] = [];

  response = '';

  public form = this.fb.group({
    fcOrigin: ['', Validators.required],
    fcDestiny: ['', Validators.required],
    fcCantidad: ['', Validators.required],
  })

  constructor(private service: MonedaService,
              private tipoCambioService: TipoCambioService,
              private fb: FormBuilder,
              private dialogService: DialogService) {}

  ngOnInit(): void {
    this.listMonedas();
    this.listTiposCambio();
  }

  onSubmit(): void {
    const dto = new RequestDto(
      +this.form.get('fcOrigin')!.value!,
      +this.form.get('fcDestiny')!.value!,
      +this.form.get('fcCantidad')!.value!,
    );

    this.tipoCambioService.calculate(dto).subscribe(data => {
      console.log('Exito!: ' + data);
      this.response = 'El resultado de la conversion es: ' + data.resultado;
    }, error => {
      console.log('Error al calcular el resultado');
      this.response = 'No existe un tipo de cambio para esta peticion';
    });
  }

  openCreateDialog(): void {
    const ref = this.dialogService.open(
      CreateMonedaComponent,
      {
        header: 'Crear Moneda',
        width: '30%'
      }
    )

    ref.onClose.subscribe((dto: MonedaDto) => {
      this.service.create(dto).subscribe(data => {
        this.listMonedas();
      }, error => {
        console.log('Error !!');
      });
    });
  }

  openCreateTipoCambioDialog(): void {
    const ref = this.dialogService.open(
      TipoCambioComponent,
      {
        data: {
          monedas: this.items,
        },
        header: 'Crear Tipo de Cambio',
        width: '50%'
      }
    )

    ref.onClose.subscribe((dto: TipoCambioDto) => {
      this.tipoCambioService.create(dto).subscribe(data => {
        this.listTiposCambio();
      }, error => {
        console.log('Error !!')
      })
    });
  }

  private listMonedas(): void {
    this.service.list().subscribe(data => {
      this.items = data;
    });
  }

  private listTiposCambio(): void {
    this.tipoCambioService.list().subscribe(data => {
      this.tiposCambio = data;
    });
  }
}
