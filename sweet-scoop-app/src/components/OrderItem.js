function OrderItem({ item, onRemove }) {
  const quantity = item.quantity;
  const unitPrice = parseFloat(item.price.replace('$', ''));
  const totalPrice = (unitPrice * quantity).toFixed(2);

  return (
    <div className="order-item">
      <h3>{item.name}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: ${totalPrice}</p>
      <button onClick={() => onRemove(item.id)}>Remove Item</button>
    </div>
  );
}

export default OrderItem;