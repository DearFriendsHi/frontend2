import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomeComponent implements OnInit {

  
  constructor(private router: Router) { }

  ngOnInit(): void {
  
  }
  goToPage(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
}
