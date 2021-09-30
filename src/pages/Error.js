import {useLocation} from 'react-router-dom'
import {Helmet} from 'react-helmet'

function Error() {
    const location = useLocation()
    return (
        <>
        <Helmet>
            <title>404 Page</title>
        </Helmet>
        <section className='error-page'>
            <div>
                <h1>404</h1>
                <h4>No Such Path Name : <code><pre>{location.pathname}</pre></code></h4>
            </div>
        </section>
        </>
    )
}

export default Error
