import { candidates } from './data/availability'
import { useCandidateStore } from '@/store/useSchedulerStore';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function Button() {
    const { selectedCandidate, setSelectedCandidate } = useCandidateStore();
    return (
        <>
            <div className='flex flex-row h-full items-center gap-2'>
                <Select
                    value={String(selectedCandidate.id)}
                    onValueChange={(val) => {
                        setSelectedCandidate(candidates.find(c => c.id === Number(val)) || candidates[0])
                    }}
                >
                    <SelectTrigger className="w-48 h-12 bg-secondary-bg border-border/20 text-text-primary text-sm font-header rounded-lg">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent
                        position="popper"
                        className="bg-secondary-bg border-border/20 w-48"
                    >
                        {candidates.map((candidate) => (
                            <SelectItem
                                key={candidate.id}
                                value={String(candidate.id)}
                                className="text-text-primary"
                            >
                                {candidate.name}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </>
    )
}

export default Button