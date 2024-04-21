export interface IError {
  type: EnumErrorType,
  message: string,
}

export enum EnumErrorType {
  'contactName' = 'contactName',
  'address' = 'address',
  'zipCode' = 'zipCode',
  'city' = 'city',
  'country' = 'country',
}