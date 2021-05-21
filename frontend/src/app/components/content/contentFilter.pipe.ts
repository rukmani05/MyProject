import { Pipe, PipeTransform } from '@angular/core';

import { Content } from 'src/app/models/Content';
import { ContentComponent } from './content.component';

@Pipe({
    name:'contentFilter'
})
  


export class ContentFilterPipe implements PipeTransform{
    transform(contents:Content[],searchTerm:string):Content[]{
        if(!contents||!searchTerm){
            return contents;
        }
        return contents.filter(content=>content.title.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
        
   
}
}

  

