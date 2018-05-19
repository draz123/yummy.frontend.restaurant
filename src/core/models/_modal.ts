export class _Modal {

  public isShown: boolean;
  public mode: _ModalType;
  public meta: any;

  constructor(
    isShown: boolean,
    mode?: _ModalType,
    meta?: any,
  ) {
    this.isShown = isShown;
    this.mode = mode;
    this.meta = meta;
  }

}

export enum _ModalType {
  PENDING = '[ModalType] Pending',
  OFFER = '[ModalType] Offer',
  TRANSACTION = '[ModalType] Transaction'
}