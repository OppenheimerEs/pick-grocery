import React, { useState, useEffect, useRef, useContext} from 'react'
import usa from './images/us.svg'
import {data} from './data'

const AppContext = React.createContext();

function AppProvider({children}) {

    // translation
    const [title, setTitle] = useState('Join Groceries Delivered in 90 Minutes')
    const [subtitle, setSubtitle] = useState('Get your healthy foods & snacks delivered at your doorsteps all day everyday')
    const [mainFlag, setMainFlag] = useState(usa)
    const [mainLang, setMainLang] = useState('English')
    const [searchInput, setSearchInput] = useState('Search your products from here')
    const [searchButton, setSearchButton] = useState('Search')
    const [offer, setOffer] = useState('Offer')
    const [help, setHelp] = useState('Need Help')
    const [join, setJoin] = useState('Join')
    const [load, setLoad] = useState('Load More')
    const [cart, setCart] = useState('Cart');

    const [isThere, setIsThere] = useState(false)

    const [mainPage, setMainPage] = useState([]);
    const xy = [];

    let tempArr = []

    // products
    const [products, setProducts] = useState(data);
    const [preciseProduct, setPreciseProduct] = useState([]);

    const [number, setNumber]  = useState(0);

    const [num, setNum] = useState(20);

    const [showMore, setShowMore] = useState(true);

    const stickList = useRef();

    const [closeSmall, setCloseSmall] = useState(false);

    const [filterInfo, setFilterInfo] = useState('No category was selected') 

    useEffect(() => {
        products.map(product => {
        product.details.map(detail => {
            detail.details.map(singleitem => {
                xy.push(singleitem);
                if (tempArr.length < num) {
                    tempArr.push(singleitem)
                }
            })
        })
    })
    }, [num])

    useEffect(() => {
        setPreciseProduct(tempArr);
        setMainPage(xy)
    }, [num])

    return (
        <AppContext.Provider value={{
            title,
            setTitle,
            mainFlag,
            setMainFlag,
            mainLang,
            setMainLang,
            subtitle,
            setSubtitle,
            searchInput,
            setSearchInput,
            searchButton,
            setSearchButton,
            offer,
            setOffer,
            help,
            setHelp,
            join,
            setJoin,
            isThere,
            setIsThere,
            products,
            preciseProduct,
            setPreciseProduct,
            number,
            setNumber,
            stickList,
            num,
            setNum,
            mainPage,
            load,
            setLoad,
            showMore,
            setShowMore,
            cart,
            setCart,
            closeSmall,
            setCloseSmall,
            filterInfo,
            setFilterInfo
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider }
