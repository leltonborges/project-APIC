import { Pipe, PipeTransform } from '@angular/core';
import { Photos } from '../photo';

@Pipe({
  name: 'filterByDescription'
})
export class FilterByDescriptionPipe implements PipeTransform {

  transform(photos : Photos, filterDescription : string) : Photos {
    if(filterDescription)
      return photos
        .filter(p => p.description.toLowerCase().includes(filterDescription.trim().toLowerCase()));

    return photos;
  }

}
