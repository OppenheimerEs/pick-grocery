import React, {useState, useEffect, useRef} from 'react'
import {RiShoppingBag3Fill} from 'react-icons/ri'
import {IoCloseOutline} from 'react-icons/io5'
import {useGlobalContext} from '../context'

function CartSlider() {
    const {cartSlider, setCartSlider, prods, amount, removeItem, total, increase, decrease} = useGlobalContext()

    
    return (
        <section className='cart-slider'>
            <div className='toggle-cart' onClick={() => setCartSlider(true)}>
                <div className='item'>
                    <RiShoppingBag3Fill className='icon' />
                    <p>{amount} Item</p>
                </div>
                <span>${total}</span>
            </div>

            {cartSlider && (
                <div className='cart'>
                    <div className='header'>
                        <div className='item'>
                            <RiShoppingBag3Fill className='icon' />
                            <p>{amount} Item</p>
                        </div>
                        <IoCloseOutline className='close-btn' onClick={() => setCartSlider(false)} />
                    </div>
                    <div className='empty-cart'>
                        {prods.length === 0 && (
                            <p>No products found</p>
                        )}
                    </div>
                    <div className='selected-prods'>
                        {prods.map((item, index) => {
                            return (
                                <article key={index}>
                                    <div className='add-remove'>
                                        <span onClick={() => increase(item.id)}>+</span>
                                        <span>{item.amount}</span>
                                        <span onClick={() => decrease(item.id)}>-</span>
                                    </div>
                                    <img src={item.img[0]} alt={item.name} />
                                    <div className='info'>
                                        <p className='name'>{item.name}</p>
                                        {item.deal && (
                                            <span className='price'>${(item.price * (100 - item.deal)) / 100}</span>
                                            )}
                                        {!item.deal && (
                                            <span className='price'>${item.price}</span>
                                        )}
                                        <p className='amount'>{item.amount} x {item.available} {item.type}</p>
                                    </div>
                                    {item.deal && (
                                        <span>${item.amount * (item.price * (100 - item.deal)) / 100}</span>
                                    )}
                                    {!item.deal && (
                                        <span>${item.amount * item.price}</span>
                                    )}
                                    <div className='close-btn-container'>
                                        <IoCloseOutline onClick={() => removeItem(item.id)} />
                                    </div>
                                </article>
                            )
                        })}
                    </div>
                </div>
            )}

        </section>
    )
}

export default CartSlider
