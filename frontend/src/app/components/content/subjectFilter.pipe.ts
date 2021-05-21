import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Pipe, PipeTransform } from '@angular/core';
import { Subject } from 'src/app/models/Subject';
@Pipe({
    name:'subjectFilter'
})

export class SubjectFilterPipe implements PipeTransform{
    
    transform(contents:Subject[],searchSubject:string):Subject[]{
        if(!contents||!searchSubject){
            return contents;
        }
        return contents.filter(content=>content.subject_name.toLowerCase().indexOf(searchSubject.toLowerCase())!==-1);
    }
}
