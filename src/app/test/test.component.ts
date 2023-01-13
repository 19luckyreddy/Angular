import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  countries = ["India", "Malaysia", "Singapore", "Hongkong"];
  employees = [{ "empno": 1231, "empname": "Thangaraj S", "age": 44, "salary": 34567.7734 }]
}
