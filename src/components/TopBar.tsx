import SpeerLogo from "@/assets/speer_logo_header.fd6ca103 (1).svg"
import Button from "./Button"
import { engineers } from "./data/availability"
import generateDays from "../libs/getDays"
import dayjs from "dayjs"
import clsx from "clsx"

const engineerColors: Record<number, string> = {
    1: "bg-eng-red",
    2: "bg-eng-purple",
    3: "bg-eng-green",
    4: "bg-eng-orange",
    5: "bg-eng-blue",
};

function TopBar() {
    const days = generateDays();
    const firstDay = dayjs(days[0].day);
    const lastDay = dayjs(days[days.length - 1].day);

    const weekLabel = firstDay.month() === lastDay.month()
        ? `${firstDay.format('MMM DD')} - ${lastDay.format('DD, YYYY')}`
        : `${firstDay.format('MMM DD')} - ${lastDay.format('MMM DD, YYYY')}`;

    return (
        <div className="flex items-center justify-between w-full h-full px-4">
            <div className="flex flex-row gap-10">
                <div className="flex items-center gap-5">
                    <div className="icon h-full flex items-center">
                        <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center">
                            <img src={SpeerLogo} alt="Speer Logo" className="w-6 h-6" />
                        </div>
                    </div>
                    <div className="font-header text-text-primary text-xl font-bold tracking-tight">SpeerCheck</div>
                </div>

                {/* Week Indicator */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 text-text-primary/70 transition-colors cursor-pointer">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m15 18-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 text-text-primary/70 transition-colors cursor-pointer">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                    <span className="text-xl font-medium text-text-primary/90 font-header leading-none tracking-tight">
                        {weekLabel}
                    </span>
                </div>

            </div>

            <div className="flex items-center gap-8">
                {/* Legends for eng*/}
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-4">
                        {engineers.map(eng => (
                            <div key={eng.id} className="flex items-center gap-2">
                                <div className={clsx("h-2 w-2 rounded-full", engineerColors[eng.id] || "bg-secondary")}></div>
                                <span className="text-[11px] text-text-primary/60 font-header font-medium uppercase tracking-wider">{eng.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="h-4 w-px bg-border/20 mx-2"></div>

                    <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-overlap flex-shrink-0"></div>
                        <span className="text-[11px] text-text-primary/60 font-header font-medium uppercase tracking-wider">Overlap Selection</span>
                    </div>
                </div>

                <div className="h-4 w-px bg-border/20"></div>

                {/* Candidate Selection */}
                <div className="flex flex-row items-center gap-3 font-header text-text-primary/70 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                        <div className='h-2 w-2 bg-cand-orange rounded-full flex-shrink-0'></div>
                        <span className='text-xs font-medium uppercase tracking-wider'>Candidate:</span>
                    </div>
                    <Button />
                </div>
            </div>
        </div>
    )
}

export default TopBar
