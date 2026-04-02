import { useState } from "react";
import generateSlots from "../libs/getTime"
import generateDays from "../libs/getDays";
import { ScrollArea } from "./ui/scroll-area";
import dayjs from "dayjs";
import clsx from "clsx";
import { engineers, candidates } from "./data/availability";
import SlotCard from "./SlotCard";

const Calender = () => {
    const slot = generateSlots();
    const days = generateDays();
    return (
        <div className="flex flex-col h-[90vh] bg-secondary-bg overflow-hidden">
            {/* Days row - 5 days */}
            <div className="days grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] items-center bg-secondary-bg flex-shrink-0">
                <div className="text-secondary border-r border-b border-border/10 h-16 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest">GMT +2</div>
                {days.map((day, idx) => (
                    <div key={idx} className="w-full h-16 flex flex-col items-center justify-center border-r border-b border-border/10">
                        <div className={clsx("font-header text-[10px] tracking-widest uppercase font-bold", day.today ? "text-blue-400" : "text-secondary")}>{day.label}</div>
                        <div className={clsx("text-xl leading-none mt-1 font-sans", day.today ? "font-bold text-blue-400" : "text-text-primary")}> {dayjs(day.day).format("DD")}</div>
                    </div>
                ))}
            </div>


            <div className="flex-1 min-h-0">
                <ScrollArea className="h-full">
                    <div className="w-full grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr]">

                        {/* Time slots column - 30 min slots time eg 08:00, 08:30, 09:00*/}
                        <div className="border-r border-border/10">
                            {slot.map((time) => (
                                <div key={time} className="h-16 flex justify-center items-start font-header text-secondary/70 text-[13px] font-bold  uppercase">
                                    <div className="-mt-1">{time}</div>
                                </div>
                            ))}
                        </div>

                        {/* creating of cells*/}
                        {days.map((day, idx) => (
                            <div key={idx} className="w-full first:border-t border-r border-border/10 last:border-r-0">
                                {slot.map((time) => {
                                    const availableEngineers = engineers.filter(eng =>
                                        eng.availability[day.day]?.includes(time)
                                    );

                                    const availableCandidates = candidates.filter(cand =>
                                        cand.availability[day.day]?.includes(time)
                                    );

                                    const overlap = availableEngineers.length > 0 && availableCandidates.length > 0;

                                    return (

                                        <div key={`${day.day}-${time}`} className={clsx("p-1 flex flex-row gap-0.5  border-b border-border/10 h-16 transition-colors", day.today ? "bg-today-bg/5" : "")}>
                                            {overlap ? (<>
                                                {availableEngineers.map((eng) => {
                                                    return <SlotCard key={eng.id} name={eng.name + " & " + availableCandidates[0].name} type="overlap" memberId={eng.id} />
                                                })}
                                            </>) : (<>
                                                {availableEngineers.map(eng => (
                                                    <SlotCard key={eng.id} name={eng.name} type="engineer" memberId={eng.id} />
                                                ))}
                                                {availableCandidates.map(cand => (
                                                    <SlotCard key={cand.id} name={cand.name} type="candidate" memberId={cand.id} />
                                                ))}
                                            </>)}
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