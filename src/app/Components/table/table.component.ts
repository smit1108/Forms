import { Component, OnInit } from '@angular/core';
import { DateRange } from 'src/datamodel/daterange.model';
import { task } from 'src/datamodel/task.model';
import { model } from '../filter/filter.component';
import { UserServiceService } from './user-service.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// let ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

/*
const USER_INFO = [
  {"name": "John Smith", "occupation": "Advisor", "age": 36},
  {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
  {"name": "Peter Adams", "occupation": "HR", "age": 20},
  {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
];
*/
// const USER_SCHEMA = {
//   "name": "text",
//   "occupation": "text",
//   "age": "number",
// }


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  value!:string;
  stage:string='';
  status:model[]=[];
  date!:Date;
   p:any;

   dateRange!:DateRange;

  //defining  our columns inside displayedColumns
   //displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
 displayedColumns: string[] = ['task_code', 'employee_name', 'stage','status','date'];
  //dataSchema = USER_SCHEMA;
  //initiallising the data source
  dataSource:task[]=[];
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
    this.dataSource = this.userService.USER_INFO;
  }


  onChangeSelection(stage:string){
      this.stage=stage;
  }

  onChangedStatus(status:model[]){
    this.status=status;
  }




  // Search(){

  //   if(this.value!=""){
  //     this.dataSource= this.dataSource.filter(res=>{
  //       return res.employee_info.toLocaleLowerCase().match(this.value.toLocaleLowerCase())
  //     })
  //   }
  //   else if(this.value==""){

  //     this.dataSource=this.userService.USER_INFO;
  //   }
   
  // }
  
  // getType(col:string){
  //   // return this.dataSchema[col];
  //   return "text";
  //  }

}
