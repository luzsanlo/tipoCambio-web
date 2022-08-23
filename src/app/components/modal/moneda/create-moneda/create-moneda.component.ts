import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {MonedaDto} from "../../../../dto/moneda-dto";
import {DynamicDialogConfig, DynamicDialogRef} from "primeng/dynamicdialog";

@Component({
  selector: 'app-create-moneda',
  templateUrl: './create-moneda.component.html',
  styleUrls: ['./create-moneda.component.css']
})
export class CreateMonedaComponent implements OnInit {

  public form = this.fb.group({
    fcName: ['', Validators.required],
    fcCode: ['', Validators.required],
  })

  constructor(
    private fb: FormBuilder,
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const dto = new MonedaDto(
      this.form.get('fcName')!.value!,
      this.form.get('fcCode')!.value!,
    );
    this.ref.close(dto);
  }
}
