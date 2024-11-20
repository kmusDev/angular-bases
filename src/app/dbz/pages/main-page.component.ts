import { Component, OnInit } from '@angular/core';
import { Chaeracter } from '../interfaces/character.interface';
import { dbzService } from '../sevices/dbz-service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

constructor(private dbzService : dbzService ){}
  get characters():Chaeracter[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacer( id: string):void {
    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character:Chaeracter):void {
    this.dbzService.addCharacter(character);
  }
}
