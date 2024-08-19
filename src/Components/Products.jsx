import { PropTypes } from 'prop-types';
import Test from './Test';
import { faStrikethrough } from '@fortawesome/free-solid-svg-icons';



const Products = ({value}) => {
  return (
  
    <div className='col mb-5'>
    <div className="card" style={{maxWidth:" 15rem"}}>
<img src="product.jpg" className="card-img-top" alt="img" />
<div className="card-body">
  <h5 className="card-title text-center">{value.product}</h5>
  <p className="card-text text-center"><span style={{textDecoration:"line-through"}}> {value.discount !== null ? value.discount:null}</span> {value.price}</p>
  {/* <button className="btn btn-primary" onClick={() => handleButtonFunc(index)}>{value.status}</button> */}
    <Test/>
</div>
</div>
</div>
  )
}

Products.propTypes = {
    value: PropTypes.object.isRequired,
    
    
    
}

export default Products

