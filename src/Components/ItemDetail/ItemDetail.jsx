import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css'
const ItemDetail = ({product}) => {
  return (
    <div className="lista">
      
      {product.map((product) => (
        <ul> 
          <div className="productoDescripcion">
        
            <img src={product.img} alt={product.name}/>
            <h4>๐Su nombre es๐{product.name}</h4>
            <h4>๐Es un pokemon de tipo๐{product.animal}</h4>
            <h4>๐Su elemento es๐{product.descripcion}</h4>
            <ItemCount/>
    
          </div> 
        </ul> 
      ))}
    </div>
    
    
    
    
    
    
  );
};

export default ItemDetail;

