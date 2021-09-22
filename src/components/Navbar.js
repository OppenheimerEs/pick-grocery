import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {BsFillQuestionCircleFill} from 'react-icons/bs'
import {CgMenuLeft} from 'react-icons/cg'
import usa from '../images/us.svg'
import de from '../images/de.svg'
import {BiSearch} from 'react-icons/bi'
import {IoCloseOutline} from 'react-icons/io5'
import {useGlobalContext} from '../context'
import {BiArrowBack} from 'react-icons/bi'


function Navbar() {
    const {setTitle, mainFlag, mainLang, setMainFlag, setMainLang, searchInput, setSubtitle, setSearchInput, setSearchButton, offer, setOffer, help, setHelp, join, setJoin, isThere, setLoad, setCart} = useGlobalContext();

    const [toggleLanguages, setToggleLanguages] = useState(false);

    const showSidebar = useRef(null);
    const showOverlay = useRef(null);

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        if (isOpen) {
            showOverlay.current.style.display = 'block'
            setTimeout(() => {
                let x = showSidebar.current.style.transform = 'translateX(0)'
                clearTimeout(x);
            },100);
        }
    }, [isOpen])

    const handleClose = () => {
        showSidebar.current.style.transform = 'translateX(-100%)'

        setTimeout(() => {
                let x = showOverlay.current.style.display = 'none'
                clearTimeout(x);
        }, 500);
    }

    const topSrch = useRef(null);
    const [toggleTopSearch, setToggleTopSearch] = useState(false);

    useEffect(() => {
        if (toggleTopSearch) {
            topSrch.current.style.display='block';
        } else {
            topSrch.current.style.display='none';
        }
    }, [toggleTopSearch])



    const setLang = (language) => {
        if (language === 'German') {
            setTitle('Lebensmittel in 90 Minuten geliefert')
            setMainLang('Deutsch')
            setMainFlag(de)
            setSubtitle('Holen Sie sich den ganzen Tag über gesunde Lebensmittel und Snacks vor Ihre Haustür')
            setSearchInput('Suchen Sie hier nach Ihren Produkten')
            setSearchButton('Suche')
            setOffer('Angebot')
            setHelp('Brauchen Sie Hilfe')
            setJoin('Beitreten')
            setLoad('Mehr laden')
            setCart('Wagen')
            
        } else if (language === 'English') {
            setTitle('Groceries Delivered in 90 Minutes')
            setMainLang('English')
            setMainFlag(usa)
            setSubtitle('Get your healthy foods & snacks delivered at your doorsteps all day everyday')
            setSearchInput('Search your products from here')
            setSearchButton('Search')
            setOffer('Offer')
            setHelp('Need Help')
            setJoin('Join')
            setLoad('Load More')
            setCart('Cart')
        }
    }

    return (
        <>
       <header className='navbar-header'>
            <nav className='navbar'>
            <div className="logo-toggle">
                <button onClick={() => setIsOpen(!isOpen)}><CgMenuLeft /></button>
                <Link to='/' className='logo'>Pick<span>Grocery</span></Link>
            </div>
            {isThere && (
                <form className='hi'>
                    <div className="form-control">
                        <BiSearch className='icon' />
                        <input type="text" placeholder={searchInput} />
                    </div>
                </form>
            )}
            <ul>
                <li><Link to='/offer' className='link'>{offer}</Link></li>
                <li><Link to='/help' className='link icon-text'>
                    <BsFillQuestionCircleFill className='xs-icon' />
                    <p>{help}</p>
                </Link></li>
            </ul>
            <div className="buttons">
                <button className='secondary-btn flag' onClick={() => setToggleLanguages(!toggleLanguages)}>
                    <img src={mainFlag} alt="" />
                    <p>{mainLang}</p>
                    {toggleLanguages && (
                        <ul className='dropDown'>
                        <li onClick={() => setLang('German')}><img src={de} alt="" />
                        <p>Deutsch</p></li>
                        <li onClick={() => setLang('English')}><img src={usa} alt="" />
                        <p>English</p></li>
                        </ul>
                    )}
                </button>
                <button className='primary-btn'>{join}</button>
            </div>
            <div className="flag-search">
                    <div>
                        <BiSearch className='search-icon' onClick={() => setToggleTopSearch(!toggleTopSearch)} />
                    </div>
            </div>
        </nav>
        <section className="sidebar" ref={showOverlay}>
           <div className="sidebar-content" ref={showSidebar}>
                <div className="close-btn">
                    <IoCloseOutline onClick={handleClose} />
                </div>
            <div className='join'>
                <button className='primary-btn'>Join In</button>
            </div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/'>Profile</Link></li>
                <li><Link to='/'>Checkout</Link></li>
                <li><Link to='/'>Checkout Alternative</Link></li>
                <li><Link to='/'>Your Order</Link></li>
                <li><Link to='/'>Order Invoice</Link></li>
                <li><Link to='/'>Terms and Services</Link></li>
                <li><Link to='/'>Privacy Policy</Link></li>
                <li><Link to='/'>Need Help</Link></li>
                <li><Link to='/'>Offer</Link></li>
            </ul>
           </div>
        </section>
        <section className="top-search" ref={topSrch}>
           <div className="top-search-content">
                <BiArrowBack className='icon' onClick={() => setToggleTopSearch(!toggleTopSearch)} />
                <span className='title'>Grocery</span>
                <input type="text"  placeholder={searchInput} />
                <BiSearch className='icon' />
           </div>
        </section>
       </header>
        </>
    )
}

export default Navbar
