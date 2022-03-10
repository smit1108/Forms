import { Pipe, PipeTransform } from "@angular/core";
import { task } from "src/datamodel/task.model";


@Pipe({name:'taskFilter'})
export class TaskFilterPipe implements PipeTransform{

    transform(tasks:task[], searchTerm: string):task[] {
        
        if(!tasks || !searchTerm) {
            return tasks;
        }
        return tasks.filter(task=>
            (task.employee_name.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1) || task.task_code.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1);
    }
}