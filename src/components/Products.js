import React, { useContext } from 'react';
import { DataContext } from "./DataProvider";
import { Link } from "react-router-dom";

export default function Products(props) {

    const value = useContext(DataContext);
    const [products] = value.products;
    const addCart = value.addCart;

    return (
        <section>
            <div className="products">
                {
                    products.filter(product => {
                        if (product.title.toLowerCase().includes(props.search.toLowerCase())) {
                            return product;
                        }
                        else {
                            return false;
                        }

                    }).map(product => (
                        <div className="products-card" key={product.pid}>
                            <Link to={`/products/${product.pid}`}>
                                <img src={product.images[0]} alt="cover-pic" />
                            </Link>
                            <div className="products-content">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product.pid}`}>{product.title}</Link>
                                </h3>
                                <p className="products-desc">{product.description}</p>
                                <p className="products-price">${product.price}</p>
                                <button onClick={() => addCart(product.pid)}>Agregar al Carrito</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
