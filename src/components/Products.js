import React , {useEffect} from 'react';
import { useSelector , useDispatch } from 'react-redux';
import Spinner from './shared/Spinner';
import productsActionCaller from '../redux/products/productsAction';
import Error from './shared/Error';
import Product from './shared/Product';

const Products = () => {
    const productsState = useSelector(state => state.productsState);
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(productsActionCaller())
        } , [])
   
    return (
            
        <div className="mt-2">
            {productsState.loading ? <Spinner /> : 
            productsState.error ?
            <Error /> :
                <div className="container text-center">
                    <div className="row w-100 justify-content-center m-0">
                        {productsState.products.map(product => <Product
                         id={product.id}
                         key={product.id}
                         title={product.title}
                         rating={product.rating}
                         image={product.image}
                         price={product.price}
                         productDetailes = {product} />)}
                         
                    </div>
                </div>
            }
        </div>
    );
};

export default Products;