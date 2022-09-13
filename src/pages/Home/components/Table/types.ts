import { Irecipes } from "../../../../reducers/recipes/types";

/**
 * TableViewProps.
 *
 * Usage:
 * ```
 *  @param recipes= value view table
 *  @param onFilter= fuction to filter active /inactive
 *  @param onView= function view recipe 
 *
 * ```
 */
export interface TableViewProps {
  recipes: Irecipes[];
  onFilter: (value: boolean) => void;
  onView: (id: number) => void;
}
