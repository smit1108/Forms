import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';
import { MessageService } from 'src/app/message.service';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  list:number[]=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

  dropdownopt=[500000,'userInput'];
  isDisabled=true;
  basicForm=new FormGroup(
    {
      dropval:new FormControl(500000),
      salary:new FormControl(1000,[Validators.required]),
      nps_percent:new FormControl(0,[
        Validators.required,
        Validators.pattern('^[0-9]*$'),
        Validators.min(0),
        Validators.max(100),
      ]),
      finalValue: new FormControl({value:'0',disabled: true}),
      pranNumber:new FormControl({value:'55543211',disabled: true})
    }
  )


  constructor(private _snackBar: MatSnackBar,public dialog: MatDialog,private messageService: MessageService) { }

  ngOnInit(): void {
  }

  onSubmit(){
   

  }

  onCheck(){
    this.basicForm.controls['finalValue'].setValue(0);
    let salary;
     const percent=this.basicForm.get('nps_percent')?.value;

     if(!this.checkDrop()){
       salary=500000;
     }
     else{
     salary=this.basicForm.get('salary')?.value;
     }
    let nps=(salary*percent)/100;
    nps=Math.floor(nps);
    if(salary<0){
      //alert("Salary cannot be negative");
      this.messageService.setMessage("Salary cannot be negative");
      this.dialog.open(DialogComponent);
    }

    
    else if(nps>4500)
    {
        let maxPercent=(4500*100/salary);
       maxPercent=Math.floor(maxPercent);
      //alert("NPS amount cannot exceed 4500. The maximum NPS percent allowed for your salary is "+ maxPercent);
      this .messageService.setMessage("NPS amount cannot exceed 4500. The maximum NPS percent allowed for your salary is "+ maxPercent);
      this.dialog.open(DialogComponent);
    }
    
    else{
    this.basicForm.controls['finalValue'].setValue(nps);
    }
  
   

  }

  checkDrop(){
    if(this.basicForm.get('dropval')?.value =='userInput'){
      return true;  
      //console.log("Userinput selected..");
    }
    return false;
  }

  

}
