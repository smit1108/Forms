import { Pipe, PipeTransform } from "@angular/core";
import { DateRange } from "src/datamodel/daterange.model";
import { task } from "src/datamodel/task.model";

@Pipe({name:'dateRangeFilter'})
export class DateRangeFilterPipe implements PipeTransform{
    transform(tasks:task[], dateRange:DateRange) {
        
        if(!tasks || !dateRange ) 
        return tasks;

        if(!dateRange.startDate || !dateRange.endDate)
        return tasks;

        return tasks.filter(task=>{

            const cur=new Date(task.date);
            // if( (cur.getFullYear()>=dateRange.startDate.getFullYear()) && (cur.getMonth()>=dateRange.startDate.getMonth()) &&
            //     cur.getDate()>=
            // )

            if(cur>=dateRange.startDate && cur<=dateRange.endDate)
            return true;
            
            return false;
        })
    }
}