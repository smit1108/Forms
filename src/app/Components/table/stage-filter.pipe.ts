import { Pipe, PipeTransform } from "@angular/core";
import { task } from "src/datamodel/task.model";

@Pipe({name:'stageFilter'})
export class StageFilterPipe implements PipeTransform{
    transform(tasks:task[], stage:string) {
        if(!tasks || !stage || stage=="-Select-"){
            return tasks;
        }
        return tasks.filter(task=>
            task.stage==stage
            );
    }
}