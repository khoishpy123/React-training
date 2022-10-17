import { useMemo, useState, useRef } from "react";
import './App.css'

export default function App() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, setProducts] = useState([]);
  
  
    const nameRef = useRef();
    
  
    const total = useMemo(() => {
      const result = products.reduce((price, product) => {
        return price + product.price;
      }, 0);
  
      return result;
    }, [products]);
  
  
    function handleAddProduct() {
      setProducts((prev) => [
        ...prev,
        {
          name,
          price: +price,
        }
      ]);
  
      setName("");
      setPrice("");
      nameRef.current.focus();
    }
    
    return (
      <div className='avatar'>
        <input 
          ref={nameRef}
          value={name}
          placeholder='Enter the name ...'
          onChange={(e) => setName(e.target.value)}
        />
  
        <br></br>
  
        <input 
          value={price}
          placeholder='Enter the price ...'
          onChange={(e) => setPrice(e.target.value)}
        />
  
        <br></br>
        <br></br>
        <button onClick={() => handleAddProduct()}>Add</button>
  
        <p>Total: {total} VND</p>
        <ul>
          {products.map((product, index) => (
            <li key={index}>{product.name} - price: {product.price} VND</li>
          ))}
        </ul>
      </div>
    )
  }
  