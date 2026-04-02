import { candidates } from './data/availability'
import { useCandidateStore } from '@/store/useSchedulerStore';

function Button() {
    const { selectedCandidate, setSelectedCandidate } = useCandidateStore();
    return (
        <>
            <div className='flex flex-row h-full items-center gap-2'>
                <div className="flex flex-row items-center gap-2 font-header text-text-primary/70"><div className='h-2 w-2 bg-red-500'></div>Candidate</div>
                <div className="flex flex-row h-12 w-32 bg-secondary-bg border border-border/20 rounded-lg px-2">
                    <select
                        className="w-32 h-full bg-transparent border-none outline-none text-text-primary text-sm font-header cursor-pointer"
                        value={selectedCandidate.id}
                        onChange={(e) => {
                            setSelectedCandidate(candidates.find(c => c.id === Number(e.target.value)) || candidates[0])
                        }}
                    >
                        {candidates.map((candidate) => (
                            <option key={candidate.id} value={candidate.id} className="w-32 text-text-primary bg-secondary-bg border">
                                {candidate.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </>
    )
}

export default Button