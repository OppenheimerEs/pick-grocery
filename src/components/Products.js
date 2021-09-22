import {useState} from 'react'
import {useGlobalContext} from '../context'
import ListHeader from './ListHeader'
import {ImCart} from 'react-icons/im'
import {Link} from 'react-router-dom'
import SingleProduct from './SingleProduct'

function Products() {
    const {products, preciseProduct, num, setNum, mainPage, load, showMore} = useGlobalContext();

    const handleLoadMore = () => {
        setNum(num+20)
        console.log(preciseProduct.length);
    }

    return (
        <section className='products'>
            <article className='products-list'>
                <ul className='main-products-list '>
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
