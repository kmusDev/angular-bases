import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-heroes-heroe',
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {

  public name: string = 'Ironman';
  public age: number = 45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroeDescription():string {
    return `${ this.name } - ${ this.age }`;
  }

  changeName():void {
     this.name = 'Hulk';
  }

  changeAge():void {
     this.age = 40;
  }

  resetForm():void{
    this.name ='ironman';
    this.age = 45;
  }
}
