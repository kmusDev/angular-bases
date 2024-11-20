import { Injectable } from '@angular/core';
import { Chaeracter } from '../interfaces/character.interface';
import  { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class dbzService {

  public characters: Chaeracter[]=[{
    id:uuid(),
    name:'Krilin',
    power: 1000
  },{
    id:uuid(),
    name:'Goku',
    power: 9000
   },{
    id:uuid(),
    name:'Vegeta',
    power:7500
   },];

  addCharacter(character:Chaeracter):void{
    // podemos evitarnos las lineas comentadas siguientes con el caracter spreb(...)
    const newCharacter: Chaeracter = { id:uuid(), ...character }
      // id: uuid(),
      // name: character.name,
      // power: character.power
    //}
    this.characters.push(newCharacter);
  }

  // onDeleteCharacter(index:number){
  //   this.characters.splice(index,1);
  deleteCharacterById(id:String){
    this.characters = this.characters.filter(character => character.id != id);
  }

}
