

export class task{
    public task_code:string;
    public employee_name:string;
    public stage:string;
    public status:string;
    public date:string;

    constructor(task_code:string,emp_info:string,stage:string,status:string,date:string){
        this.task_code=task_code;
        this.employee_name=emp_info;
        this.stage=stage;
        this.status=status;
        this.date=date;
    }

}