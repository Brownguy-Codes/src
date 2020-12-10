import { AppComponent, Data} from '../app.component';

export class datamodel{
    List :  Data[];
    add_item(data: Data){
        this.List.push(data);
    }
}