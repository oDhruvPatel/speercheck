import { useConfirmStore } from '../store/useSchedulerStore'

const ConfirmationModal = () => {
    const { confirmation, setConfirmation } = useConfirmStore()

    if (!confirmation) return null

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-main-bg border border-border/20 rounded-xl p-6 w-96">
                <h2 className="font-header text-text-primary text-lg mb-4">Confirm Interview</h2>

                <div className="flex flex-col gap-3 mb-6">
                    <div className="flex justify-between">
                        <span className="text-secondary text-sm">Candidate</span>
                        <span className="text-text-primary text-sm font-bold">{confirmation.candidate.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-secondary text-sm">Engineer</span>
                        <span className="text-text-primary text-sm font-bold">{confirmation.engineer.name}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-secondary text-sm">Date</span>
                        <span className="text-text-primary text-sm font-bold">{confirmation.date}</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-secondary text-sm">Time</span>
                        <span className="text-text-primary text-sm font-bold">{confirmation.time}</span>
                    </div>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={() => setConfirmation(null)}
                        className="flex-1 py-2 rounded-lg border border-border/20 text-secondary text-sm font-header cursor-pointer"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => setConfirmation(null)}
                        className="flex-1 py-2 rounded-lg bg-overlap text-white text-sm font-header cursor-pointer"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal