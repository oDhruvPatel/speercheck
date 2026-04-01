import Calender from "./Calender"

function Main() {
    return (
        <div className='h-screen w-full flex flex-col overflow-hidden'>
            <div className="header bg-main-bg h-16 w-full flex-shrink-0 flex items-center px-4 font-bold">
                <div className="text-secondary w-full">SpeerCheck Dashboard</div>
            </div>
            <div className="flex-1 min-h-0 w-full">
                <Calender />
            </div>
        </div>
    )
}

export default Main