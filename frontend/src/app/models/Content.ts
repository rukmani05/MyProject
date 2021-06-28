

export class Content {
  id:number;
    
    sub_id:string;
    title:string;
    summary:string;
    std_id:string;
    links:string;
    target:any;
    
  
constructor(id,sub_id,title,summary,std_id,links,file_key)
{
  this.id=id;
  this.std_id=std_id;
 
  this.title=title;
  this.summary=summary;
  this.sub_id=sub_id;
  this.links=links;
  this.target=file_key;

  // console.log(this.files);
}


}