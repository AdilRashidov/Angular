import { ToDo } from "./todo";

export class List {
    id? : number;
    name :string;
    ListOwner?: number;
   // var MyArray:Array<{id : number,name :string,desc: string,tags:string,check: boolean}>;
   todosDto: ToDo[];
}
