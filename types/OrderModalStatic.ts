export interface IOrderCardStatic {
  cardTitle: string;
  productTitle: string;
  qty: string;
  aromaText: string;
  capacityText: string;
  amountText: string;
  totalPriceText: string;
  deleteProductBtn: string;
  increaseQtyBtn: string;
  decreaseQtyBtn: string;
  sum: string;
  arias: {
    addOne: string;
    delOne: string;
    delete: string;
  };
}

export interface IOrderModalStatic {
  buttons: {
    cartBtnText: string;
    cartBtnAriaLabel: string;
    addToCartBtn: string;
    addToCartSuccessText: string;
    makeOrderBtn: string;
  };
  title: string;
  titleCart: string;
  emptyBasketText: {
    subtitle: string;
    tip: string;
  };
  orderCard: IOrderCardStatic;
  orderForm: {
    title: string;
    nameLabel: string;
    phoneLabel: string;
    submitOrderBtn: string;
  };
}
