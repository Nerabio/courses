import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import notify from 'devextreme/ui/notify';
import DevExpress from 'devextreme';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.scss']
})
export class CourseDetailsComponent implements OnInit {

  public id = 0; // ID текущего курса
  public form: FormGroup;

  public gridBoxValue: number[] = [3];
  public gridDataSource: any = [{ID: 1, name: 'saf'},{ID: 2, name: 'drgf'},{ID: 3, name: 'sxdvaf'}];

  public columnsTemplate: DevExpress.ui.dxDataGridColumn[] = [
    {caption: 'Пользователь', dataField: 'name'},
  ];

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router, 
              public eventService: EventService,
              private fb: FormBuilder) { 
                this.dateRangeValidator = this.dateRangeValidator.bind(this); 
              }

  ngOnInit() {
    this.activatedRoute.params.subscribe((paramMap: Params) => {
      this.id = Number(paramMap['id']);
    });
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      id: [this.id, [Validators.required]],
      title: ['', [Validators.required]],
      description: ['sfsefsef'],
      ownerId: [1, [Validators.required]],
      listenersId: [1, [Validators.required]],
      dates: this.fb.group({
        dateStart: [new Date(), Validators.required],
        dateEnd: [new Date(), Validators.required]
      }, { validator: this.dateRangeValidator}),
  });
}

get f(){
  return this.form.controls;
}

/** Валидатор не допускает дату старта меньше даты завершения */
dateRangeValidator(group: FormGroup): { [s: string]: boolean } {
  if (new Date(group.get('dateStart').value) > new Date(group.get('dateEnd').value)) {
      // this.toastr.error('Дата окончания контракта не может опережать дату начала', 'Диапазон дат контракта');
      notify('Дата окончания контракта не может опережать дату начала', 'error', 1600);
      return { 'dateRange': true};
  }
  return null;
}


clickSave(ev: any): void {}

clickCancel(ev: any): void {}

}
