import { Pipe, PipeTransform } from "@angular/core";
import { task } from "src/datamodel/task.model";
@Pipe({name:'dateFilter'})
export class DateFilterPipe implements PipeTransform{

    transform(tasks:task[], date:Date) {
        // console.log(date,date.getDate,date.getFullYear);
        if(!tasks || !date ){
            return tasks;
        }
       // console.log(date,date.getDate,date.getFullYear);
        //console.log(date)
        return tasks.filter(task=>{
            //console.log(task.date);
            
            const cur=new Date(task.date);

            if(cur.getMonth()==date.getMonth() && cur.getFullYear()==date.getFullYear() && cur.getDate()==date.getDate()){
            return true;
            }
            // if(cur===date)
            // return true;
            return false;
        }
            );

    }

}