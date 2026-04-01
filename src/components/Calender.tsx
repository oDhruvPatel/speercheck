import { useState } from "react";
import generateSlots from "../libs/getTime"
import generateDays from "../libs/getDays";
import { ScrollArea } from "./ui/scroll-area";
import dayjs from "dayjs";
import clsx from "clsx";
import { engineers, candidates } from "./data/availability";

const Calender = () => {

    const [selectedEngineer, setSelectedEngineer] = useState(engineers[0]);
    // const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]);

    const slot = generateSlots();
    const days = generateDays();
    return (
        <div className="flex flex-col h-full">

            <div className="days grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] items-center bg-secondary-bg/30 flex-shrink-0">
                <div className="text-secondary border-r border-border/10 h-14 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest">GMT +2</div>
                {days.map((day, idx) => (
                    <div key={idx} className="w-full h-14 flex flex-col items-center justify-center border-border">
                        <div className={clsx("font-body text-[10px] uppercase font-bold", day.today ? "text-candidate" : "text-secondary")}>{day.label}</div>
                        <div className={clsx("font-header text-xl leading-none mt-1", day.today ? "font-bold text-blue-400" : "text-primary")}> {dayjs(day.day).format("DD")}</div>
                    </div>
                ))}
            </div>


            <div className="flex-1 min-h-0">
                <ScrollArea className="h-full">
                    <div className="w-full grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] pt-4">

                        {/* Time slots column */}
                        <div className="border-r border-border/10">
                            {slot.map((time) => (
                                <div key={time} className="h-16 flex justify-center items-start font-header text-secondary/70 text-[13px] font-bold  uppercase">
                                    <div className="-mt-2">{time}</div>
                                </div>
                            ))}
                        </div>

                        {/* creating of cells*/}
                        {days.map((day, idx) => (
                            <div key={idx} className="w-full border-r border-border/10 last:border-r-0">
                                {slot.map((time) => {
                                    const availableEngineers = engineers.filter(eng =>
                                        eng.availability[day.day]?.includes(time)
                                    );
                                    return (
                                        <div key={`${day.day}-${time}`} className={clsx("flex flex-row gap-0.5 first:border-t border-b border-border/10 h-16  cursor-pointer transition-colors", day.today ? "bg-secondary-bg hover:bg-main-bg" : "hover:bg-secondary-bg")}>
                                            {availableEngineers.map(eng => (
                                                <div key={eng.id} className="w-full h-full bg-engineer flex items-center justify-center px-2">
                                                    <span className="font-header text-xs">{eng.name}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )
                                })}
                            </div>
                        ))}



                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default Calender