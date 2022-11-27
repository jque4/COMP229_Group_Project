export class Product
{
  constructor(
    // tslint:disable-next-line: variable-name
    public _id?: number,
    public name?: string,
    public price?: number,
    public quantity?: number,
  ){}
  public toString(): string
  {
    return `
    Book
    -------------------------------
    Name       : ${this.name}
    Price      : ${this.price}
    Quantity   : ${this.quantity}
    -------------------------------
    `;
  }
}