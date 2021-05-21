

export class Content {
  id:number;
    standard_id:number;
    subject_id:number;
    title:string;
    summary:string;
    subject_name:string;
    subject_code:string;
    
  
constructor(id,standard_id,subject_id,title,summary,subject_name,subject_code)
{
  this.id=id;
  this.standard_id=standard_id;
  this.subject_id=subject_id;
  this.title=title;
  this.summary=summary;
  this.subject_name=subject_name;
  this.subject_code=subject_code;
}


}