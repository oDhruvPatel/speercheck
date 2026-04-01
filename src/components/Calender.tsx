import generateSlots from "../libs/getTime"
import generateDays from "../libs/getDays";
import { ScrollArea } from "./ui/scroll-area";
import dayjs from "dayjs";

import clsx from "clsx";
const Calender = () => {
    const slot = generateSlots();
    const days = generateDays();
    // console.log(days);
    // console.log(slots);
    return (
        <div className="flex flex-col h-full">

            <div className="days grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr] items-center border-b border-border bg-secondary-bg/30 flex-shrink-0">
                <div className="text-secondary border-r border-border h-14 flex items-center justify-center text-[10px] font-bold uppercase tracking-widest">GMT +2</div>
                {days.map((day, idx) => (
                    <div key={idx} className="w-full h-14 flex flex-col items-center justify-center border-r last:border-r-0 border-border">
                        <div className={clsx("font-body text-[10px] uppercase font-bold", day.today ? "text-candidate" : "text-secondary")}>{day.label}</div>
                        <div className={clsx("font-header text-xl leading-none mt-1 text-primary", day.today && "font-bold text-blue-500")}> {dayjs(day.day).format("DD")}</div>
                    </div>
                ))}
            </div>


            <div className="flex-1 min-h-0">
                <ScrollArea className="h-full">
                    <div className="w-full grid grid-cols-[120px_1fr_1fr_1fr_1fr_1fr]">

                        {/* Time slots column */}
                        <div className="border-r border-border">
                            {slot.map((time) => (
                                <div key={time} className="h-16 flex justify-center items-center font-header text-secondary/60 text-[10px] font-bold border-b border-border/50 uppercase">{time}</div>
                            ))}
                        </div>

                        {/* creating of cells*/}
                        {days.map((day, idx) => (
                            <div key={idx} className="w-full border-r border-border last:border-r-0">
                                {slot.map((time) => {
                                    return (
                                        <div key={`${day.day}-${time}`} className="border-b h-16">{day.day}-{time}</div>
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