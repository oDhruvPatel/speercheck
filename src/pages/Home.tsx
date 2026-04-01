import Navbar from '../components/Navbar'
import Main from '../components/Main'

function Home() {
    return (
        <div className='flex flex-row'>
            <div className='w-1/7'><Navbar /></div>
            <div className='w-6/7'>
                <Main />
            </div>
        </div>
    )
}

export default Home