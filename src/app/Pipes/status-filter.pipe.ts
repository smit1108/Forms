import { Pipe, PipeTransform } from "@angular/core";
import { task } from "src/datamodel/task.model";
import { model } from "../Components/filter/filter.component";

@Pipe({name:'statusFilter'})
export class StatusFilterPipe implements PipeTransform{

    transform(tasks:task[], status:model[]) {
        
        if(!tasks || status.length==0){
            return tasks;
        }

        return tasks.filter(task=>{
            const taskStatus=task.status;
            if(status.some(st=> st.item_text===taskStatus))
            return true;
            else return false;
        })

    }

}



// status= Pending, Approved