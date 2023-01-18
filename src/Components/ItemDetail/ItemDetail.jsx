import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({product}) => {
  return (
    <div className="lista">
      
      {product.map((product) => (
        <ul> 
          <div className="productoDescripcion">
        
            <img src={product.img} alt={product.name}/>
            <h4>🌟Su nombre es🌟{product.name}</h4>
            <h4>🌟Es un pokemon de tipo🌟{product.animal}</h4>
            <h4>🌟Su elemento es🌟{product.descripcion}</h4>
            <ItemCount/>
    
          </div> 
        </ul> 
      ))}
    </div>
    
    
    
    
    
    
  );
};

export default ItemDetail;

