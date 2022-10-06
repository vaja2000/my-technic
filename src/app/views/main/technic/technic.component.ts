import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technic',
  templateUrl: './technic.component.html',
  styleUrls: ['./technic.component.scss']
})
export class TechnicComponent implements OnInit {

  categories:string[] = [
    "ტელეფონები", "ტელეფონის აქსესუარები", "კომპიუტერები", "კომპიუტერის კომპონენტები",
    "კომპიუტერის აქსეუარები", "მონიტორები", "კაბელები,ადაპტერები"
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
