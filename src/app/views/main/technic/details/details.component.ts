import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  categories:string[] = [
    "ტელეფონები", "ტელეფონის აქსესუარები", "კომპიუტერები", "კომპიუტერის კომპონენტები",
    "კომპიუტერის აქსეუარები", "მონიტორები", "კაბელები,ადაპტერები","ტელეფონები", "ტელეფონის აქსესუარები", "კომპიუტერები", "კომპიუტერის კომპონენტები",
    "კომპიუტერის აქსეუარები", "მონიტორები", "კაბელები,ადაპტერები","ტელეფონები", "ტელეფონის აქსესუარები", "კომპიუტერები", "კომპიუტერის კომპონენტები",
    "კომპიუტერის აქსეუარები", "მონიტორები", "კაბელები,ადაპტერები",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
