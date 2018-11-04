import { LoginForm } from "./login-form";

export class User extends LoginForm {
  constructor() {
    super();
  }

  public openHours?: OpenSchedule;
  public website: string;
  public description: string;
  public image: string;
  
}

export interface User extends LoginForm {
  website: string,
  description: string,
  image: string
};

export interface OpenSchedule {
  week?: OpenHours,
  saturday?: OpenHours,
  sunday?: OpenHours
}

export interface OpenHours {
  openTime: string,
  closeTime: string
}