import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit { 
  ngOnInit(): void {

  }

  rutas=[
    {
      name: 'Home',
      Path: '/home'
    },
    {
      name: 'About',
      Path: '/about'
    },
    {
      name: 'Contact',
      Path: '/contact'
    },
    {
      name: 'Post',
      Path: '/post'
    }
  ];

}
