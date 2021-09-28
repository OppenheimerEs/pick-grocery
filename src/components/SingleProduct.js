import {useState, useEffect} from 'react'
import {useGlobalContext} from '../context'
import {ImCart} from 'react-icons/im'
import {IoCloseOutline} from 'react-icons/io5'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';

function SingleProduct({img, name, desc, available, price, type, deal, promotion, id}) {

    const {cart, addItem} = useGlobalContext();

    const [productInfo, setProductInfo] = useState(false);

    const [index, setIndex] = useState(0)

    useEffect(() => {
        const lastIndex = img.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        } else if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, img])

    const handleAddToCart= () => {
        addItem(id)
    }

    return (
        <div>
            {productInfo && (
                <>
                <div className="product-info">
                    <div className="product-info-content">
                        <div className="img-container">
                                {img.map((image, Imgindex) => {
                                let position = 'nextSlide';

                                if (Imgindex === index) {
                                    position = 'activeSlide'
                                }

                                if (Imgindex === index - 1 || index === 0 && Imgindex === img.length - 1) {
                                    position = 'lastSlide'
                                }

                                return (
                                    <img src={image} alt={name} className={`img ${position}`} key={Imgindex} />
                                )
                                })}
                               <div className="grid-gallery">
                                    {img.map((image, x) => {
                                    return(
                                        <img key={x} src={image} alt={name} onClick={() => setIndex(x)} className={x === index && 'focused'} />
                                    )
                                    })}
                               </div>
                            {deal && (
                                <div className="deal">{deal}%</div>
                            )}
                            <button className="prev" onClick={() => setIndex(index - 1)}>
                                <FiChevronLeft />
                            </button>
                            <button className="next" onClick={() => setIndex(index + 1)}>
                                <FiChevronRight />
                            </button>
                        </div>
                        <div className="content">
                            <h2>{name}</h2>
                            <p>{available} {type}</p>
                            <p className='description'>{desc}</p>
                            <div className="price-cart">
                                <div>
                                    {deal && (
                                    <>
                                        <span className='promotion'>&nbsp;&nbsp;${price}&nbsp;&nbsp;</span>
                                        <span className='price'>${promotion}</span>
                                    </>
                                    )}
                                    {!deal && (
                                    <>
                                        <span className='promotion' style={{color: '#fff', userSelect: 'none'}}>$0</span>
                                        <span className='price'>${price}</span>
                                    </>
                                    )}
                                </div>
                                <button>
                                    <ImCart className='icon' />
                                    <p>{cart}</p>
                                </button>
                            </div>
                        </div>
                    </div>
                <div className="close-btn" onClick={() => setProductInfo(!productInfo)}><IoCloseOutline /></div>
                </div>
                </>
            )}
            <div className="image-container" onClick={() => setProductInfo(!productInfo)}>
               <img src={img[0]} alt="" />
            </div>
            <h4 onClick={() => setProductInfo(!productInfo)}>{name}</h4>
            <p>{available} {type}</p>
            <div className="price-cart">
             <div>
                     {deal && (
                         <>
                             <span className='promotion'>&nbsp;&nbsp;${price}&nbsp;&nbsp;</span>
                             <span className='price'>${promotion}</span>
                         </>
                     )}
                     {!deal && (
                         <>
                             <span className='promotion' style={{color: '#fff', userSelect: 'none'}}>$0</span>
                             <span className='price'>${price}</span>
                         </>
                     )}
             </div>
                <button onClick={handleAddToCart}>
                     <ImCart className='icon' />
                     <p>{cart}</p>
                </button>
            </div>
            {deal && (
                <div className="deal">{deal}%</div>
            )}
        </div>
    )
}

export default SingleProduct
