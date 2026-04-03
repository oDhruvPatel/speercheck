import { useConfirmStore, useBookedSlotStore } from '../store/useSchedulerStore'
import dayjs from 'dayjs'
import clsx from 'clsx'
import toast from "react-hot-toast"

const ConfirmationModal = () => {
    const { confirmation, setConfirmation } = useConfirmStore()
    const { bookedSlot, setBookedSlot } = useBookedSlotStore()

    if (!confirmation) return null

    const endTime = dayjs(`1970-01-01 ${confirmation.time}`)
        .add(30, 'minute')
        .format('hh:mm A')

    const handleConfirm = () => {
        if (!confirmation || !confirmation.candidate || !confirmation.engineer) return;

        const formattedDate = dayjs(confirmation.date).format('MMMM DD, YYYY')
        const formattedTime = dayjs(`2000-01-01 ${confirmation.time}`).format('hh:mm A')

        const candidateName = confirmation.candidate.name;
        const engineerName = confirmation.engineer.name;

        setBookedSlot([...bookedSlot, {
            date: confirmation.date,
            time: confirmation.time,
            engineer: confirmation.engineer.id,
            candidate: confirmation.candidate.id
        }]);

        setConfirmation(null);
        toast.success(`Interview scheduled for ${candidateName} and ${engineerName} on ${formattedDate} at ${formattedTime}`)
    }

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-main-bg border border-border/10 rounded-xl w-[400px] overflow-hidden">

                <div className="flex items-center justify-between px-6 pt-6 pb-5">
                    <h2 className="text-text-primary font-sans text-xl font-medium">
                        Schedule Interview <span className='text-secondary/40 text-sm ml-2'>30 mins</span>
                    </h2>
                    <button
                        onClick={() => setConfirmation(null)}
                        className="text-secondary/40 hover:text-secondary cursor-pointer text-lg transition-colors"
                    >
                        ✕
                    </button>
                </div>


                <div className="px-6 flex flex-col gap-4 pb-5">

                    {/* Candidatefield */}
                    <label className="text-secondary/50 text-[10px] font-header uppercase tracking-widest -mb-3">
                        Candidate
                    </label>
                    <div className="flex items-center h-10 bg-secondary-bg rounded-lg px-3 gap-2">

                        <svg className="w-4 h-4 text-secondary/40 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className={clsx("text-sm font-header",
                            !confirmation.isOverlap && confirmation.engineer
                                ? "text-secondary/40"
                                : "text-text-primary"
                        )}>
                            {confirmation.candidate?.name ?? "Candidate"}
                        </span>
                        {/* candidate not fre- only engineer clicked */}
                        {!confirmation.isOverlap && confirmation.engineer && (
                            <span className="ml-auto text-xs text-red-400/80">Not available</span>
                        )}

                        {confirmation.isOverlap && (
                            <span className="ml-auto text-xs text-green-400/80">Available</span>
                        )}

                        {confirmation.type === "candidate" && (
                            <span className="ml-auto text-xs text-green-400/80">Available</span>
                        )}


                    </div>

                    {/* Engineer field */}
                    <label className="text-secondary/50 text-[10px] font-header uppercase tracking-widest -mb-3">
                        Engineer
                    </label>
                    <div className="flex items-center h-10 bg-secondary-bg rounded-lg px-3 gap-2">

                        <svg className="w-4 h-4 text-secondary/40 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="2" y="3" width="20" height="14" rx="2" />
                            <line x1="8" y1="21" x2="16" y2="21" />
                            <line x1="12" y1="17" x2="12" y2="21" />
                        </svg>
                        <span className={clsx("text-sm font-header",
                            !confirmation.engineer
                                ? "text-secondary/40"
                                : "text-text-primary"
                        )}>
                            {confirmation.engineer ? confirmation.engineer.name : "Engineer"}
                        </span>

                        {/* engineer not free, only candidate is free */}
                        {!confirmation.isOverlap && !confirmation.engineer && (
                            <span className="ml-auto text-xs text-red-400/80">Not available</span>
                        )}
                        {confirmation.isOverlap && (
                            <span className="ml-auto text-xs text-green-400/80">Available</span>
                        )}
                        {confirmation.type === "engineer" && (
                            <span className="ml-auto text-xs text-green-400/80">Available</span>
                        )}
                    </div>


                    <div className="flex flex-col gap-1">
                        <label className="text-secondary/50 text-[10px] font-header uppercase tracking-widest">
                            Interview Date
                        </label>
                        <div className="flex items-center justify-between h-10 bg-secondary-bg rounded-lg px-3">
                            <span className="text-text-primary text-sm font-header">
                                {dayjs(confirmation.date).format('MMMM DD, YYYY')}
                            </span>
                            <svg className="w-4 h-4 text-secondary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                <line x1="16" y1="2" x2="16" y2="6" />
                                <line x1="8" y1="2" x2="8" y2="6" />
                                <line x1="3" y1="10" x2="21" y2="10" />
                            </svg>
                        </div>
                    </div>


                    <div className="flex gap-3">
                        <div className="flex flex-col gap-1 flex-1">
                            <label className="text-secondary/50 text-[10px] font-header uppercase tracking-widest">
                                Start time
                            </label>
                            <div className="flex items-center justify-between h-10 bg-secondary-bg rounded-lg px-3">
                                <span className="text-text-primary text-sm font-header">
                                    {dayjs(`1970-01-01 ${confirmation.time}`).format('hh:mm A')}
                                </span>
                                <svg className="w-4 h-4 text-secondary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 flex-1">
                            <label className="text-secondary/50 text-[10px] font-header uppercase tracking-widest">
                                End time
                            </label>
                            <div className="flex items-center justify-between h-10 bg-secondary-bg rounded-lg px-3">
                                <span className="text-text-primary text-sm font-header">{endTime}</span>
                                <svg className="w-4 h-4 text-secondary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Btns */}
                <div className="flex justify-end gap-2 px-6 py-4 border-t border-border/10">
                    <button
                        onClick={() => setConfirmation(null)}
                        className="px-5 py-2 bg-transparent border border-border/20 rounded-lg text-secondary/70 text-sm font-header cursor-pointer hover:bg-white/5 transition-colors"
                    >
                        Cancel
                    </button>
                    {confirmation.isOverlap && (
                        <button
                            onClick={handleConfirm}
                            className="px-5 py-2 bg-overlap rounded-lg text-white text-sm font-header font-medium cursor-pointer hover:bg-overlap-hover transition-colors"
                        >
                            Confirm
                        </button>
                    )}
                </div>

            </div>
        </div>
    )
}

export default ConfirmationModal