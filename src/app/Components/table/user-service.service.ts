import { Injectable } from '@angular/core';
import { task } from 'src/datamodel/task.model';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  //  USER_INFO = [
  //   {"name": "John Smith", "occupation": "Advisor", "age": 36},
  //   {"name": "Muhi Masri", "occupation": "Developer", "age": 28},
  //   {"name": "Peter Adams", "occupation": "HR", "age": 20},
  //   {"name": "Lora Bay", "occupation": "Marketing", "age": 43}
  // ];
  USER_INFO:task[]=[
    new task("DMO/WFM001/01Mar2022/ID/I131534/24","Priyank","Proof Verification","Approved","2/15/2022"),
    new task("DMO/WFM001/01Mar2022/ID/I131534/24","Ram","Checker Level","Pending","2/25/2022"),
    new task("DMO/INV03/21Feb2022/ID/I134555/1C","Shyam","Investment Declaration","Investment Declaration","3/8/2022"),
    new task("DMO/INV01/18Feb2022/ID/I181715/92","Vikas","Proof Verification","Approved","3/6/2022"),
    new task("DMO/INV01/18Feb2022/ID/I181715/102","Rakesh","Investment Declaration","Approved","2/20/2022"),
    new task("DMO/INV01/18Feb2022/ID/I181715/222","Vinay","Proof Submission","Pending","2/20/2022"),
    new task("DMO/INV01/18Feb2022/ID/I181719/207","Jay","Proof Verification","Pending","2/25/2022"),
    new task("DMO/INV01/18Feb2022/ID/I181718/62","Vijay","Investment Declaration","Proof Submission","2/15/2022"),
    new task("DMO/INV01/18Feb2022/ID/I18177/12","Shashank","Checker Level","Approved","2/15/2022"),
    new task("DMO/INV01/18Feb2022/ID/I18179/102","Ashish","Proof Verification","Pending","2/17/2022"),
    new task("DMO/INV01/18Feb2022/ID/I18377/312","Dhruv","Investment Declaration","Investment Declaration","3/1/2022"),
    new task("DMO/INV01/18Feb2022/ID/I16377/79","Himanshu","Checker Level","Proof Submission","3/1/2022"),
    new task("DMO/INV01/18Feb2022/ID/I16377/99","Yash","Proof Verification","Proof Submission","3/5/2022"),
    new task("DMO/INV01/18Feb2022/ID/I16377/102","Akshay","Checker Level","Approved","3/2/2022"),
    
    
    
    
        
  ];

  constructor() { }
}
