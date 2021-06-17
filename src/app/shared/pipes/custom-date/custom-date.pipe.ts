import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import * as id from 'dayjs/locale/id'

@Pipe({
  name: 'customdate'
})
export class CustomDatePipe implements PipeTransform {

  transform(value: any, parseFormat?: string, displayFormat?: string): string  {
    if(!displayFormat){
      displayFormat = 'DD MMMM YYYY';
    }

    if(!parseFormat) {
      parseFormat = 'DD MMMM YYYY'
    }

    const date = dayjs(value, parseFormat);

    return `${date.locale(id).format(displayFormat)}`
  }

}
