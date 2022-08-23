import {Component, OnInit} from '@angular/core';
import {Moneda} from "../../../../model/moneda";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";
import {FormBuilder, Validators} from "@angular/forms";
import {TipoCambioDto} from "../../../../dto/tipo-cambio-dto";

@Component({
  selector: 'app-tipo-cambio',
  templateUrl: './tipo-cambio.component.html',
  styleUrls: ['./tipo-cambio.component.css']
})
export class TipoCambioComponent implements OnInit {

  items: Moneda[] = [];

  public form = this.fb.group({
    fcOrigin: ['', Validators.required],
    fcDestiny: ['', Validators.required],
    fcFactor: ['', Validators.required],
  })

  constructor(private fb: FormBuilder, public ref: DynamicDialogRef, public config: DynamicDialogConfig) {}

  ngOnInit(): void {
    this.items = this.config.data.monedas;
  }

  onSubmit(): void {
    const dto = new TipoCambioDto(
      +this.form.get('fcOrigin')!.value!,
      +this.form.get('fcDestiny')!.value!,
      +this.form.get('fcFactor')!.value!,
    );
    this.ref.close(dto);
  }
}
