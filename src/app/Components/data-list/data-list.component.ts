import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Employee } from 'src/datamodel/employee.model';
import { DataService } from './data.service';




@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css']
})


export class DataListComponent implements OnInit {
 
  employeeData:Employee[]=[];
   empForm:FormGroup;

  remarksDropdown:string[]=["select","good","average","bad","excellent"];

  

  constructor(private fb:FormBuilder,private dataService:DataService) { 
    this.empForm=this.fb.group({
      form:this.fb.array([]),
  })

} 


  
  ngOnInit(): void {

    this.employeeData= this.dataService.employeeData;

    this.employeeData.forEach(emp=>{

       let fm:FormGroup=this.fb.group({
         taskCode:[emp.taskCode,Validators.required],
         amount:[emp.amount,Validators.required],
         monthlyAmount:[{value:emp.monthlyAmount,disabled:true}],
         remarks:[emp.remarks],
         date:[emp.date]
      });
    
      this.form.push(fm);

    });
    
    } 
   
    get form() : FormArray {
      return this.empForm.get("form") as FormArray;
    }
    
  
}
