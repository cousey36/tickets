import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  animations: [
    trigger('inOut', [
      state('in', style({
        opacity: 1,
        visibility: 'visible'
      })),
      state('out', style({
        opacity: 0,
        visibility: 'hidden'
      })),
      transition('in => out', [
        animate('0.2s')
      ]),
      transition('out => in', [
        animate('0.2s')
      ])
    ])
  ]
})
export class ModalComponent {
  @ContentChild('encabezado') encabezadoC?: TemplateRef<any>;
  @ContentChild('cuerpo') cuerpoC?: TemplateRef<any>;
  @ContentChild('pie') pieC?: TemplateRef<any>;

  @Input() anchura: string = '540';
  @Input() visible: boolean = false;
  @Input() procesando: boolean = false;
  @Input() mensajeProcesando: string = 'Cargando...';
}
