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
  orderCard: {
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
  };
  orderForm: {
    title: string;
    nameLabel: string;
    phoneLabel: string;
    submitOrderBtn: string;
  };
}
