import Calender from "./Calender"
import TopBar from "./TopBar"
import { useState } from "react"
import { candidates } from "./data/availability"

function Main() {
    const [selectedCandidate, setSelectedCandidate] = useState(candidates[0])
    return (
        <div className='h-screen w-full flex flex-col overflow-hidden'>
            <div className="header bg-main-bg h-[10vh] border-b border-border/10 w-full flex-shrink-0 flex items-center px-4 font-bold">
                <TopBar />
            </div>
            <div className="flex-1 min-h-0 w-full h-[90vh]">
                <Calender />
            </div>
        </div>
    )
}

export default Main