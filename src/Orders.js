import React, { useState, useEffect } from 'react';
import { db, collection, query, orderBy, onSnapshot } from "./firebase"; // Updated imports
import './Orders.css'
import { useStateValue } from "./StateProvider";
import Order from './Order'

function Orders() {
  const [{ user }, ] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if(user) {
        const ordersRef = collection(db, 'users', user?.uid, 'orders');
        const q = query(ordersRef, orderBy('created', 'desc'));

        const unsubscribe = onSnapshot(q, (snapshot) => {
          setOrders(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          })));
        });

        return () => {
          unsubscribe(); // Unsubscribe from the snapshot listener when component is unmounted
        }
    } else {
        setOrders([])
    }

  }, [user])

    return (
        <div className='orders'>
            <h1>Your Orders</h1>

            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} key={order.id} /> // Added key prop for optimization
                ))}
            </div>
        </div>
    )
}

export default Orders;
