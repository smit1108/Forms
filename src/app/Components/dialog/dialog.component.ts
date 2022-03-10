import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/message.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  message:string;
  constructor(private messageService: MessageService) {
    this.message=this.messageService.getMessage();
   }


  ngOnInit(): void {
  }

}
