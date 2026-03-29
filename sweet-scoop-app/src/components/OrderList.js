import { useEffect } from 'react';
import OrderItem from './OrderItem';

function OrderList({ order, onRemove }) {
  // Load order from localStorage on first render
  useEffect(() => {
    const saved = localStorage.getItem('order');
    if (saved) {
      // Parent will handle this via prop if needed
    }
  }, []);

  // Save order to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('order', JSON.stringify(order));
  }, [order]);

  const total = order.reduce((sum, item) => {
    const unitPrice = parseFloat(item.price.replace('$', ''));
    return sum + unitPrice * item.quantity;
  }, 0);

  return (
    <div className="order-list">
      <h2>Your Order</h2>
      {order.length === 0 ? (
        <p>No items in your order.</p>
      ) : (
        <>
          {order.map((item) => (
            <OrderItem key={item.id} item={item} onRemove={onRemove} />
          ))}
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default OrderList;