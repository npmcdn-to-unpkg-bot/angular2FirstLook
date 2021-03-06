import {Pipe,PipeTransform} from "angular2/core";

@Pipe({name: 'sortCharacters'})
export class SortCharactersPipe implements PipeTransform {

    transform(value:any, args:any[]):any {
        if (!value || !value.sort) {
            return value;
        }
        return value.sort((a:Character, b:Character) => {
            if (a.name < b.name) {
                return -1;
            }
            if (a.name > b.name) {
                return 1;
            }
            return 0;
        });
    }
}