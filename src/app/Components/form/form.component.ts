import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  isDisabled=true;
  basicForm=new FormGroup(
    {
      salary:new FormControl({value:1000,disabled: true}),
      nps_percent:new FormControl(0,[

        Validators.required,

        Validators.pattern('^[0-9]*$'),

        Validators.min(0),
        Validators.max(100),

      ]),
      finalValue: new FormControl({value:'0',disabled: true}),
      pranNumber:new FormControl({value:'',disabled: true})
    }
  )


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    //console.warn(this.basicForm.value);
   // console.log(this.basicForm.controls['firstName'].value);
   // console.log(this.basicForm.controls['nps_percent')?.value);
  }

  onCheck(){

   const percent=this.basicForm.get('nps_percent')?.value;
   const salary=this.basicForm.get('salary')?.value;
   
   const nps=(salary*percent)/100;
   // this.basicForm.setControl('finalValue',nps);
   this.basicForm.controls['finalValue'].setValue(nps);
   console.log(nps); 

  }

}
