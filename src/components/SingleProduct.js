import {useState, useEffect} from 'react'
import {useGlobalContext} from '../context'
import {ImCart} from 'react-icons/im'
import {IoCloseOutline} from 'react-icons/io5'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import { useRef } from 'react/cjs/react.development';

function SingleProduct({img, name, desc, available, price, type, deal, promotion, id}) {

    const {prods} = useGlobalContext()

    const {cart, addItem} = useGlobalContext();

    const [productInfo, setProductInfo] = useState(false);

    const [index, setIndex] = useState(0)

    const [isClicked, setIsClicked] = useState(false)

    useEffect(() => {
        const lastIndex = img.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        } else if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, img])

    let con = prods.find(item => item.id === id)

    useEffect(() => {
        if (!con) {
            setIsClicked(false)
        } else {
            setIsClicked(true)
        }
    }, [prods])

    const [alert, setAlert] = useState(false)

    const alertModal = useRef()

    const handleAddToCart= () => {
        addItem(id)
        setIsClicked(true)
        setAlert(true)
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 1500)

        if (alert) {
            alertModal.current.style.transform = 'translateY(0)'
            alertModal.current.style.opacity = '1'
            alertModal.current.style.transition = 'transform 0.2s ease-in, opacity 0.2s ease-in-out'
        } else {
            alertModal.current.style.transform = 'translateY(200%)'
            alertModal.current.style.opacity = '0'
            alertModal.current.style.transition = 'transform 0.2s ease-in, opacity 0.2s ease-in-out'
        }

        return () => {
            clearTimeout(timeout)
        }
    }, [alert])

    return (
        <div>
            <div className='alert' ref={alertModal}>Item Added To Cart</div>
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
                                <button className={isClicked && 'clicked-prod'} onClick={handleAddToCart}>
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
                <button className={isClicked && 'clicked-prod'} onClick={handleAddToCart}>
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
