import axios from 'axios';
import React, { use, useEffect } from 'react'

const App = () => {
const product = async () => {
  try {
    let products = await axios.get('/products');
    console.log('Products:', products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
useEffect(() => {
  product();
}, []);

  return (
    <div>App</div>
  )
}

export default App