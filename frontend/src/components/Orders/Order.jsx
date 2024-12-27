import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Order() {
  const [loading, setLoading] = useState(false);
  const [order, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get('https://ecommerce-app-backend-blgm.onrender.com/api/orders/getOrders',
          { withCredentials: true }
        );
        setOrders(response.data.message[0]);
        setProducts(response.data.message[0].products);
        // console.log("Orders", response.data.message[0]._id);
        // console.log("Products", response.data.message[0].products[0].product);
        // setLoading(false);
        // console.log("Orders", order);
        // console.log("Products", products);
      } catch (error) {
        console.error('Error fetching orders:', error);
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);


  const removeProduct = async (productId) => {
    try {
      const userConfirm = confirm('Do you want to remove this product from cart?');
      if (userConfirm) {
        const response = await axios.delete(`/api/orders/deleteOrder/${productId}`, 
          { withCredentials: true });
        console.log(response.data.message);
        alert('Product removed from cart');
        // Update the state to remove the product from the list
        const updatedProducts = products.filter(product => product._id !== productId);
        setProducts(updatedProducts);
        location.reload();
      }
    } catch (error) {
      console.error('Error removing product:', error);
      alert('Failed to remove product. Please try again.');
    }
  };



  return (
    <>
      {/* {
        order.length === 0 ? <p>No orders found</p> : null
      } */}
      <header className="text-center py-6 bg-white shadow-md">
        <h1 className="text-2xl font-bold">Your Orders</h1>
      </header>
      <main className="p-6">
        {
          products.map((product,index) => (
            
              <div  key={index}  className="flex flex-col justify-between items-center bg-white p-4 rounded-lg shadow-lg m-2 md:flex-row">
                <div>
                  <img src={product.product.imageUrl[0]} alt="Product" className="w-full h-full object-cover rounded-md" />
                </div>
                <div className='text-2xl'>
                  <h3 className=" font-semibold">{product.product.name}</h3>
                  <p className=" text-gray-600">Quantity: 1</p>
                  <p className=" text-gray-600">Price: {product.product.price}</p>
                </div>
                <button
                onClick={()=>{removeProduct(product._id)}}
                className='w-fit bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-4 rounded-md transition duration-200 right-3 shadow-md' >Remove</button>
              </div>
        
          ))
        }
        <footer className="mt-6 bg-white p-6 shadow-md">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Total Price: <span id="total-price" className="text-green-500">{order.totalPrice}</span></h3>
            <button

            
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">Proceed to Payment</button>
          </div>
        </footer>
      </main>
    </>
  )
}

export default Order
