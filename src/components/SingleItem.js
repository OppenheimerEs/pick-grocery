import {useState} from 'react'
import { useEffect } from 'react/cjs/react.development';
import {useGlobalContext} from '../context'

function SingleItem({name, details, id}) {
    const {setPreciseProduct, number, setNumber, setShowMore} = useGlobalContext();
    const [x, setX] = useState(false);

    const handleClick = () => {
        setPreciseProduct(details);
        setX(!x);
        setShowMore(false);
    }
    
    useEffect(() => {
        setNumber(id)
        console.log('number : ', number, ' id : ', id);
    }, [x])

    return (
        <li onClick={handleClick} className={`${number === id ? 'green-color':  null}`}>
            {name}
        </li>
    )
}

export default SingleItem
