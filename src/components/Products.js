import {useState, useEffect, useRef} from 'react'
import {useGlobalContext} from '../context'
import ListHeader from './ListHeader'
import {ImCart} from 'react-icons/im'
import {Link} from 'react-router-dom'
import SingleProduct from './SingleProduct'
import {IoCloseOutline} from 'react-icons/io5'

function Products() {
    const {products, preciseProduct, num, setNum, mainPage, load, showMore, closeSmall, setCloseSmall} = useGlobalContext();


    const handleLoadMore = () => {
        setNum(num+20)
        console.log(preciseProduct.length);
    }

    const closeBtn = useRef(null)

    const bottomList = useRef(null)

    useEffect(() => {
        if (closeSmall) {
            bottomList.current.style.transform = 'translateY(0)'
            closeBtn.current.style.top = '34%'
            closeBtn.current.style.transform = 'translateX(-50%)'
            bottomList.current.style.transition = 'transform 0.5s ease'
            closeBtn.current.style.transition = 'top 0.5s ease'
        } else {
            bottomList.current.style.transform = 'translateY(100%)'
            closeBtn.current.style.top = '100%'
            bottomList.current.style.transition = 'transform 0.5s ease'
            closeBtn.current.style.transition = 'top 0.5s ease'
        }
    }, [closeSmall])

    return (
        <section className='products'>
            <article className='products-list large-list'>
                <ul className='main-products-list '>
                   {products.map(product => {
                       return (
                           <ListHeader key={product.id} {...product} />
                           )
                        })}
                </ul>
            </article>
            <div className='close' ref={closeBtn} onClick={() => setCloseSmall(false)}><IoCloseOutline /></div>
                {closeSmall && (
                    <div className="overlay"></div>
                )}
            <article className='products-list bottom-list' ref={bottomList}>
                <ul className='main-products-list bottom-list'>
                   {products.map(product => {
                       return (
                           <ListHeader key={product.id} {...product} />
                       )
                   })}
                </ul>
            </article>
           
            <article className="products-content">
               <div className="products-content-cards">
                   {preciseProduct.map((item, index) => {
                       if (item.deal) {
                           var promotion = (item.price * (100-item.deal) ) / 100;
                       }
                   return (
                      <SingleProduct key={index} {...item} promotion={promotion} />
                   )
               })}
               </div>
               {preciseProduct.length === 0 && (
                   <div className='empty-result'>
                       <h1>Sorry, No result found {':('}</h1>
                       <img src='https://shop-redq.vercel.app/_next/static/images/no-result-a242b3bc908f26b79710c3d30f5230ac.svg' alt="" />
                   </div>
               )}
              <div className="btn-container">
                    {(preciseProduct.length >= 10 && preciseProduct.length < mainPage.length && showMore) && (
                    <button onClick={handleLoadMore} className='primary-btn'>{load}</button>
                )}
              </div>
            </article>
        </section>
    )
}

export default Products
