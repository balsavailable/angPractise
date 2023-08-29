import { Component, ElementRef, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    @Output('navdata')  selectedNav=new EventEmitter<string>();

    onNavSelect(header:string)
    {
         this.selectedNav.emit(header);
    }
}
