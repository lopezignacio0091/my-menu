export interface RecipeProps {
  open: boolean;
  close: () => void;
  isEdit?: boolean;
  create: (value: any) => void;
}
