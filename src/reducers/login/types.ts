export interface ILogin {
  email: string;
  name: string;
  surname: string;
  rol: number;
}
export interface Login {
  user: ILogin;
  fetching:boolean;
  error:boolean;
  errorMessage:string;
}
