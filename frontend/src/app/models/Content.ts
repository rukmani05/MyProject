

export class Content {
  id:number;
    
    sub_id:number;
    title:string;
    summary:string;
    std_id:string;
    
    
  
constructor(id,sub_id,title,summary,std_id)
{
  this.id=id;
  this.std_id=std_id;
 
  this.title=title;
  this.summary=summary;
  this.sub_id=sub_id;
  
}


}