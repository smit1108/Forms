import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import { DateRange } from 'src/datamodel/daterange.model';


export interface model{
  item_id:number,
  item_text:string;
}


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})


export class FilterComponent implements OnInit {
  
  tareekh!:Date;
  selectedValue!:string;
  beginDate!:Date;
  endDate!:Date;
   dateRange!:DateRange;
  //dateRange:DateRange={startDate:null,endDate:null};
  @Output() toFilter:EventEmitter<string> =new EventEmitter();

  @Output() statusChanged:EventEmitter<model[]> = new EventEmitter();

  @Output() dateChanged: EventEmitter<Date>=new EventEmitter();

  @Output() dateRangeChanged: EventEmitter<DateRange>=new EventEmitter();

  value!:string;
  dropdownList:model[]=[];
  selectedItems:model[]=[];
  dropdownSettings:IDropdownSettings={};

  stages:string[]=["-Select-","Proof Submission","Checker Level","Investment Declaration","Proof Verification"];
  constructor() { }

  ngOnInit(){
    this.dropdownList=[
      {item_id:1 ,item_text:"Investment Declaration"},
      {item_id:2 ,item_text:"Proof Submission"},
      {item_id:3 ,item_text:"Approved"},
      {item_id:4 ,item_text:"Pending"},
    ];
    
    this.dropdownSettings={
      singleSelection:false,
      idField:'item_id',
      textField:'item_text',
      selectAllText:'Select All',
      unSelectAllText:'Unselect All',
      itemsShowLimit:3,
    
    };
  }

  onChangeSelection(){
    this.toFilter.emit(this.selectedValue);
  }

  onItemSelect(){
    //console.log(item);
    
    this.statusChanged.emit(this.selectedItems);

  }
  onAllItemSelect(){
    this.statusChanged.emit(this.dropdownList);
  }

  onDateChanged(){
    this.dateChanged.emit(this.tareekh);
  }

  onDateRangeChanged(){
    this.dateRange={startDate:this.beginDate,endDate:this.endDate};
    // this.dateRange.startDate=this.beginDate;
    // this.dateRange.endDate=this.endDate;
    this.dateRangeChanged.emit(this.dateRange);
    console.log("event fired");
  }


  onSelectAll(){
    //console.log(items);
    console.log(this.selectedItems);
  }

  
}
