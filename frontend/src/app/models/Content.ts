

export class Content {
  id:number;
    
    sub_id:number;
    title:string;
    summary:string;
    std_id:string;
    links:string;
    
    
  
constructor(id,sub_id,title,summary,std_id,links)
{
  this.id=id;
  this.std_id=std_id;
 
  this.title=title;
  this.summary=summary;
  this.sub_id=sub_id;
  this.links=links;
}


}