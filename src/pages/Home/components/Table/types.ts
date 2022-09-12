import { Irecipes } from '../../../../reducers/recipes/types';
export interface TableViewProps {
    recipes:Irecipes[];
    onFilter:(value:boolean) => void;
}