import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  toppings = this._formBuilder.group({
    pepperoni: false,
    extracheese: false,
    mushroom: false,
  });
  selectIndex:number = 0

  phone:any = {
    image: [
      "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/336948/pexels-photo-336948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ]
  }

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    
  }
  nextBtn() {
    if(this.selectIndex >= this.phone.image.length - 1)
      this.selectIndex = 0
    else
      this.selectIndex ++
  }
  prevBtn() {
    if(this.selectIndex <= 0)
      this.selectIndex = this.phone.image.length - 1
    else
      this.selectIndex --
  }
  chooseImgPage(index:number) {
    this.selectIndex = index
  }
}
