import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Chaeracter } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Chaeracter[]=[{
    name:'Trunks',
    power: 10
  }];


@Output()
public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    //TODO: emitir el ID del personaje
    this.onDelete.emit(id);
  }

}
