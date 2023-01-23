import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent {
  employees = [
    { "empno": 1231, "empname": "Thangaraj S", "age": 44, "salary": 34567.7734 },
    { "empno": 1232, "empname": "Michel", "age": 39, "salary": 34567.7734 },
    { "empno": 1233, "empname": "Muzeeb", "age": 32, "salary": 34567.7734 },
    { "empno": 1234, "empname": "Archan", "age": 45, "salary": 34567.7734 },
    { "empno": 1235, "empname": "Ishant", "age": 49, "salary": 34567.7734 },
    { "empno": 1236, "empname": "Herosh", "age": 51, "salary": 34567.7734 },
    { "empno": 1237, "empname": "Hemanth", "age": 48, "salary": 34567.7734 }
  ]
}
