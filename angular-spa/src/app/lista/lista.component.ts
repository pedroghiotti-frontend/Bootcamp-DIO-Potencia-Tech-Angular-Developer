import { Component } from '@angular/core';

type listItem = 
{
  name:string,
  num:number,
  editing:boolean,
  checked:boolean
}

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  items:listItem[] = [];
  inputFieldContent:string='';

  add(item:string)
  {
    if (item.trim() === '') return;

    this.items.push({name: item, num: 1, editing: false, checked: false});
  }
  removeAt(index:number)
  {
    if(this.items.at(index) === undefined) return;

    this.items.splice(index, 1);
  }
  changeNumOfItemAtIndex(index:number, amount:number)
  {
    if(this.items.at(index) === undefined) return;

    this.items[index].num = this.items[index].num + amount < 1 ? 1 : this.items[index].num + amount;
    this.items[index].num = this.items[index].num + amount > 99 ? 99 : this.items[index].num
  }

  print(e:any){console.log(e)};
}
