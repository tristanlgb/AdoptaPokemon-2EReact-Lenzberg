import { Link } from 'react-router-dom';
import Pokemon from '../Pokemon/Pokemon';

const ItemList = ((Pokemon))=>{
    return (
        <ul className="CardContainer"> 
        {Pokemon.map ((p)=>(
            <Link to="item" key={p.id}>
            <Item Pokemon={p}/>
            </Link>

        ))}
        </ul>
        );};
        
        export defualt ItemList;