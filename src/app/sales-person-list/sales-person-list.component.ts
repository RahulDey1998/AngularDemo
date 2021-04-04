import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  constructor() { }

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Rahul Dey", "rahul@gmail.com", 1000),
    new SalesPerson("Sourav Roy", "sourav@gmail.com", 1300),
    new SalesPerson("Raktim Sen", "raktim@gmail.com", 1200)
  ];

  ngOnInit(): void {
  }

}
