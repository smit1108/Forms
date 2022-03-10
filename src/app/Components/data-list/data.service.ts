import { Injectable } from '@angular/core';
import { Employee } from 'src/datamodel/employee.model';

@Injectable({
  providedIn: 'root'
})
export class DataService{

  constructor() { }

  employeeData:Employee[]=[
    new Employee("abc1",0,0,"good",new Date("3/11/2022")),
    new Employee("abc2",0,0,"average",new Date("4/11/2022")),
    new Employee("xyz1",0,0,"excellent",new Date("2/11/2022")),
    new Employee("xyz2",0,0,"bad",new Date("2/18/2022")),
    new Employee("xyz3",0,0,"good",new Date("3/11/2022")),
    new Employee("xyz4",0,0,"excellent",new Date("2/20/2022")),
    new Employee("xyz5",0,0,"average",new Date("2/28/2022")),
    
    
  ];

  

}
