class PriceOption {
  weight: number;
  price: number;
  currency: string;
  id: number;

  constructor(id: number, weight: number, price: number, currency: string) {
    this.weight = weight;
    this.price = price;
    this.currency = currency;
    this.id = id;
  }
}

export default PriceOption;
