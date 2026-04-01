import SpeerLogo from '../assets/speer_logo_header.fd6ca103 (1).svg'

function Navbar() {
    return (
        <div className='secondary-bg h-screen w-full flex flex-col'>
            <div className="logo flex flex-row items-center justify-center h-1/10 gap-5">
                <div className="icon w-[30%] h-full flex items-center justify-end">
                    <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                        <img src={SpeerLogo} alt="Speer Logo" className="w-6 h-6" />
                    </div>
                </div>
                <div className="title w-[70%] flex items-center justify-start font-header text-primary text-xl">SpeerCheck</div>
            </div>
        </div>
    )
}

export default Navbar