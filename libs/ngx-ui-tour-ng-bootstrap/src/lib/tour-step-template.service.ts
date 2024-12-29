import type {TemplateRef} from '@angular/core';
import {Injectable} from '@angular/core';
import type {IStepOption} from 'ngx-ui-tour-core';

@Injectable({
  providedIn: 'root'
})
export class TourStepTemplateService {
  public template: TemplateRef<{ step: IStepOption }>;
}
