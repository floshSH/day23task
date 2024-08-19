import  { useState } from 'react'
import Products from './Components/Products'
import NavBar from './Components/NavBar'
import Banner from './Components/Banner'

import MyContext from './Context/MyContext.jsx'
const App = () => {
  
  const [cards, setCards]=useState([{product: "Fancy Product",price:"$40.00 - $80.00",discount:false, status:"Add to Cart"},
    {product: "Special Item",price:"$18.00",discount:"$20.00", status:"Add to Cart"},
    {product: "Sale Item",price:"$25.00",discount:"$50.00", status:"Add to Cart"},
    {product: "Popular Item",price:"$40.00",discount:null, status:"Add to Cart"},
    {product: "Sale Item2",price:"$25.00",discount:"$50.00", status:"Add to Cart"},
    {product: "Fancy Product",price:"$120.00 - $280.00",discount:null, status:"Add to Cart"},
    {product: "Special Item2",price:"$18.00",discount:"$20.00", status:"Add to Cart"},
    {product: "Popular Item2",price:"$40.00",discount:null, status:"Add to Cart"}

  ]);
  
    const [count, setCount] = useState(0);
  


  
  
  return (
    <MyContext.Provider value={{count, setCount}}>
    <div>
     
     <NavBar/>
     <Banner/>
     <div className="container px-4 px-lg-5 mt-5">
   <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
   {
       cards.map((value,index)=>(
        
         <Products key={index}  value={value} />
       ))
     }

   </div>
  
  </div>
  
      </div>
    </MyContext.Provider>
   
  )
}

export default App