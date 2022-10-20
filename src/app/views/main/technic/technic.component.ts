import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-technic',
  templateUrl: './technic.component.html',
  styleUrls: ['./technic.component.scss']
})
export class TechnicComponent implements OnInit {

  categories:string[] = [
    "ტელეფონები", "ტელეფონის აქსესუარები", "კომპიუტერები", "კომპიუტერის კომპონენტები",
    "კომპიუტერის აქსეუარები", "მონიტორები", "კაბელები,ადაპტერები",
  ]
  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

}
