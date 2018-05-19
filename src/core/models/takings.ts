export class Takings {
  constructor(
    singleTaking
  ) {
    Object.assign(this, singleTaking);
  }

  public label: TakingLabel;
  public value: number;
}

export type TakingLabel = 'ENTIRE' | 'WEEKLY' | 'MONTHLY';