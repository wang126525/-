export class User{
  id:number;
  name:string;
  constructor(id:number,name:string){
    console.log(id + "---"+name);
    this.id = id;
    this.name = name;
    
  }
}
