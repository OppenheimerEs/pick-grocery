import {useState, useRef, useEffect} from 'react'
import {useGlobalContext} from '../context'
import {IoChevronForwardOutline} from 'react-icons/io5'
import {IoChevronDownOutline} from 'react-icons/io5'
import SingleItem from './SingleItem'

function ListHeader({type, icon, details}) {
    const [showSecondList, setShowSecondList] = useState(false)
    const {setPreciseProduct, preciseProduct, setShowMore, setFilterInfo} = useGlobalContext();
    let tmpArr = [];

    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showSecondList) {
            linksContainerRef.current.style.height = `${linksHeight+10}px`;
            linksContainerRef.current.style.transition = `height 0.4s ease-in-out`;
        } else {
            linksContainerRef.current.style.height = '0';
            linksContainerRef.current.style.transition = `height 0.3s ease-in-out`;
        }
    }, [showSecondList]);

    const handleMainClick = () => {
        setShowMore(false);
        setShowSecondList(true);
        details.map(detail => {
            const {details} = detail;
            details.map(x => {
                tmpArr.push(x);
            })
        })
        setPreciseProduct(tmpArr);
        tmpArr = [];
        setFilterInfo(type);
    }

    return (
        <li>
            <div className={`list-header ${showSecondList ? 'green-color' : null}`}>
                 <span className="icon" onClick={handleMainClick}>{icon}</span><p onClick={handleMainClick}>{type}</p><span className='chevron' onClick={() => setShowSecondList(!showSecondList)}>{showSecondList ? <IoChevronDownOutline /> : <IoChevronForwardOutline />}</span>
            </div>

            <div className='links-container' ref={linksContainerRef}>
                <ul className={showSecondList && 'active'} ref={linksRef}>
                    {details.map(detail => {
                        return (
                            <SingleItem key={detail.id} {...detail} />
                        )
                    })}
                </ul>
            </div>
          
        </li>
    )
}

export default ListHeader
