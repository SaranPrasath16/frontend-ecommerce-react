import React from "react";
import { Card, Image, Details, QtyInput, RemoveBtn } from "./styles";

const CartItemCard = ({ item, onQuantityChange, onRemove }) => {
  const { productId, name, price, quantity } = item;

  return (
    <Card>
      <Image src={`https://via.placeholder.com/80?text=Img`} alt={name} />
      <Details>
        <h4>{name}</h4>
        <p>Price: ₹{price.toFixed(2)}</p>
        <div>
          Quantity:
          <QtyInput
            type="number"
            min="1"
            value={quantity}
            onChange={(e) =>
              onQuantityChange(productId, Number(e.target.value))
            }
          />
        </div>
        <p>Total: ₹{(price * quantity).toFixed(2)}</p>
        <RemoveBtn onClick={() => onRemove(productId)}>Remove</RemoveBtn>
      </Details>
    </Card>
  );
};

export default CartItemCard;
