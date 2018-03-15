export class LoginForm {

  public login: string;
  public password: string;

  constructor(
    login: string = '',
    password: string = ''
  ) {
    this.login = login;
    this.password = password;
  }
  
}

export interface LoginForm {
  login: string,
  password: string
}