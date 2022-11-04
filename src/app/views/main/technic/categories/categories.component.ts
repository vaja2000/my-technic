import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories:string[] = [
    "ტელეფონები", "ტელეფონის აქსესუარები", "კომპიუტერები", "კომპიუტერის კომპონენტები",
    "კომპიუტერის აქსეუარები", "მონიტორები", "კაბელები,ადაპტერები",
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
