import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  public heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Vision', 'Deadpool'];
  public deletedHero: string = '';

  public deleteHero(): void {
    this.deletedHero = this.heroes.pop() || '';
  }

}
