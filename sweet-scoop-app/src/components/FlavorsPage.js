import { useState } from 'react';
import Header from './Header';
import FlavorCatalog from './FlavorCatalog';
import OrderList from './OrderList';
import Footer from './Footer';

function FlavorsPage() {
    const [order, setOrder] = useState(() => {
        // Load from localStorage on first render
        const saved = localStorage.getItem('order');
        return saved ? JSON.parse(saved) : [];
    });

    function handleAddToOrder(flavor) {
        setOrder((prevOrder) => {
            const existing = prevOrder.find((item) => item.id === flavor.id);
            if (existing) {
                // Increase quantity if already in order
                return prevOrder.map((item) =>
                    item.id === flavor.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Add new item with quantity 1
            return [...prevOrder, { ...flavor, quantity: 1 }];
        });
    }

    function handleRemove(id) {
        setOrder((prevOrder) =>
            prevOrder
                .map((item) =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
                .filter((item) => item.quantity > 0)
        );
    }

    return (
        <div>
            <Header />
            <FlavorCatalog onAddToOrder={handleAddToOrder} />
            <OrderList order={order} onRemove={handleRemove} />
            <Footer />
        </div>
    );
}

export default FlavorsPage;