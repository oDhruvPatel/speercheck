import Calender from "./Calender"

function Main() {
    return (
        <div className='h-screen w-full flex flex-col overflow-hidden'>
            <div className="header bg-green-300 h-16 w-full flex-shrink-0 flex items-center px-4 font-bold">
                SpeerCheck Dashboard
            </div>
            <div className="flex-1 min-h-0 w-full">
                <Calender />
            </div>
        </div>
    )
}

export default Main