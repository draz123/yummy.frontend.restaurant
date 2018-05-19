import { LoginForm } from "./login-form";

export class User extends LoginForm {
  
  constructor() {
    super();
  }
  
}

export interface User extends LoginForm {
  website: string,
  description: string,
  image: string
};
