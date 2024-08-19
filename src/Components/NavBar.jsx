import React, {useContext, useState } from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faCaretDown, faCartShopping} from "@fortawesome/free-solid-svg-icons" 
import MyContext from '../Context/MyContext';

const NavBar = () => {
    const {count,setCount}=useContext(MyContext)
    const [click, setClick]= useState(false);
    const [cartClick, setCartClick]=useState(false);
    const shopFunction=()=>{
        console.log("inside a function")
       setClick(!click);
       console.log(click);
    }
    const cartFunction=()=>{
      console.log("inside a function")
     setCartClick(!cartClick);
     console.log(cartClick);
  }

  return (
   <div className="d-flex-column bg-light">
     
     <div className=' ms-5 d-flex  justify-content-between align-items-center ' style={{cursor:"pointer", height:"auto"}}>
      <div className='d-flex mt-3 w-100  justify-content-start  align-items-center' style={{cursor:"pointer", height:"10px", padding:"2.5rem"}} >
      <div style={{width:"10rem"}}>
        Start Bootstrap
        


    </div>
      <div className='d-flex ms-5 justify-content-between w-75 align-items-center' >
      
     <div className="d-flex w-50 justify-content-evenly" >
     <div   id='laptopView'>Home</div>
        <div   id='laptopView' >About</div>
        <div   id='laptopView' onClick={shopFunction } style={{position:"relative"}}>Shop <span><FontAwesomeIcon icon={faCaretDown} /></span>
        
        
         {click ? (<div className="card" style={{width:"10rem",position:"absolute"}}>
  <div class="card-header">
  All Products
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Popular Products</li>
    <li className="list-group-item">New Arrivals</li>
     </ul>
</div>):null}
        
        </div>
      
     </div>
       
    
    <div><div className='ms-5'>
   <button  id='laptopView' style={{width:"8rem", borderRadius:"10px",height:"6vh"}}> <FontAwesomeIcon icon={faCartShopping} /> <span>cart </span><span className='bg-dark  text-light' style={{borderRadius:"25%", padding:"1px"}}>{count}</span>
   </button>
 </div></div>
 </div>
    
    </div>
   <div className='px-5' >  <FontAwesomeIcon  id='padView' icon={faBars} onClick={cartFunction} /> </div> 
   
    </div>
    { cartClick ?
  <div className='ms-5 ps-5' id="padView" >
  <div className='p-1' id='padView'>Home</div>
  <div  className='p-1' id='padView'>About</div>
  <div  className='p-1'   id='padView' onClick={shopFunction } >Shop <span><FontAwesomeIcon icon={faCaretDown} /></span>
    
    
     {click ? (<div className="card" style={{width:"10rem"}}>
<div class="card-header">
All Products
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">Popular Products</li>
<li className="list-group-item">New Arrivals</li>
 </ul>
</div>):null}
    
    </div>
  
 
   

<div  className='mb-2 mt-2'>
<button   id='padView' style={{width:"8rem", borderRadius:"10px",height:"6vh"}}> <FontAwesomeIcon icon={faCartShopping} /> <span>cart </span><span className='bg-dark  text-light' style={{borderRadius:"25%", padding:"1px"}}>{count}</span>
</button>
</div>

</div>
 : null}
   </div>
    
  )
}

export default NavBar

