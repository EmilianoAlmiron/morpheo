import React, { useState, useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import { DataContext } from "./DataProvider";

export default function Cart() {

    const value = useContext(DataContext);
    const [cart, setCart] = value.cart;
    const [total, setTotal] = useState(0);
    const [allItemCost, setAllItemCost] = useState(0);

    useEffect(() => {

        const getTotal = () => {

            let result = cart.reduce((prev, item) => {
                return prev + (item.price * item.count)
            }, 0)

            setAllItemCost(result);
            let flag = false;
            if (result < 1000 && flag === false) {
                flag = true;
                result = result + 100;
                setTotal(result);
            }
            else if (result > 1000 && flag === true) {
                flag = false;
                result = result - 100;
                setTotal(result);
            }
            else {
                setTotal(result);
            }
        }

        getTotal();
    }, [cart])

    const increaseProduct = id => {
        cart.forEach(item => {
            if (item.pid === id) {
                item.count += 1;
            }
        })
        setCart([...cart]);
    }

    const decreaseProduct = id => {
        cart.forEach(item => {
            if (item.pid === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart]);
    }

    const removeProduct = id => {
        if (window.confirm("¿Estás segura de eliminar este producto?")) {
            cart.forEach((item, index) => {
                if (item.pid === id) {
                    cart.splice(index, 1)
                    item.count = 1;
                }
            })
            setCart([...cart]);
        }
    }

    if (cart.length === 0)
        return <section id="cart-section">El carrito esta vacío ...!!! </section>

    return (
        <section>
            <div className="cart">
                <div className="cart-box">
                    {
                        cart.map(product => (
                            <div className="card" key={product.pid}>
                                <div className="card-img" style={{ backgroundImage: `url(${product.images[0]})` }} />

                                <div className="card-content">
                                    <p title={product.title}>{product.title}</p>
                                    <h3>$ {product.price}</h3>

                                    <div className="amount">
                                        <button className="count" onClick={() => decreaseProduct(product.pid)}> - </button>
                                        <span>{product.count}</span>
                                        <button className="count" onClick={() => increaseProduct(product.pid)}> + </button>
                                    </div>

                                    <button className="delete" onClick={() => removeProduct(product.pid)}>Eliminar</button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <div className="checkout">
                    <p className="heading">Detalles de precio</p>

                    <div className="price">
                        <p>Precio: </p><p>$ {allItemCost.toLocaleString()}</p>
                    </div>

                    <div className="delivery">
                        <p>Los gastos de envío: </p>{allItemCost < 1000 ? (<p>&#8377; 100</p>) : (<p>Gratis</p>)}
                    </div>

                    <div className="total">
                        <p>Total: </p><p>$ {total.toLocaleString()}</p>
                    </div>

                    <Link to="/cart" className="checkout-btn">PAGO</Link>
                    <small>*Entrega gratuita para pedidos superiores a $ 1000 </small>
                </div>

            </div>

        </section>
    )
}
