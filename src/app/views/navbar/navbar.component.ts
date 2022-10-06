import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  search:boolean = false

  constructor() { }

  ngOnInit(): void {
  }
  searchClick() {
    this.search = true
  }
}
