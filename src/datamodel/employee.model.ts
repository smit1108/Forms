

export class Employee{
    taskCode:string;
    amount:number;
    monthlyAmount:number;
    remarks:string;
    date:Date;

    constructor(taskCode:string,amount:number,monthlyAmount:number,remarks:string,date:Date) {
        this.taskCode=taskCode;
        this.amount=amount;
        this.monthlyAmount=monthlyAmount;
        this.remarks=remarks;
        this.date=date;
    }    
}