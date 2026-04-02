import SpeerLogo from "@/assets/speer_logo_header.fd6ca103 (1).svg"

function TopBar() {
    return (
        <>
            <div className="icon h-full flex items-center justify-end ml-5">
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                    <img src={SpeerLogo} alt="Speer Logo" className="w-6 h-6" />
                </div>
            </div>
            <div className="font-header text-text-primary w-full ml-5">SpeerCheck</div>
        </>
    )
}

export default TopBar