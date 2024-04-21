export interface IOrder {
  userId: string,
  stripeId: string,
  name: string,
  address: string,
  zipcode: string,
  city: string,
  country: string,
  products: any,
}