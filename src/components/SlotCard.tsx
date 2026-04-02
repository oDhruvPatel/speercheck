import clsx from "clsx";

interface SlotCardProps {
    name: String;
    type: "engineer" | "candidate" | "overlap";
    memberId: number;
    onClick?: () => void;
}

const engineerColors: Record<number, { border: string, bg: string, hover: string }> = {
    1: { border: "border-eng-red-border/70", bg: "bg-eng-red/80", hover: "hover:bg-eng-red-hover/80" },
    2: { border: "border-eng-purple-border/70", bg: "bg-eng-purple/80", hover: "hover:bg-eng-purple-hover/80" },
    3: { border: "border-eng-green-border/70", bg: "bg-eng-green/80", hover: "hover:bg-eng-green-hover/80" },
    4: { border: "border-eng-orange-border/70", bg: "bg-eng-orange/80", hover: "hover:bg-eng-orange-hover/80" },
    5: { border: "border-eng-blue-border/70", bg: "bg-eng-blue/80", hover: "hover:bg-eng-blue-hover/80" },
};

const candidateColor = { border: "border-cand-orange-border/70", bg: "bg-eng-orange/80", hover: "hover:bg-eng-orange-hover/80" };
const overlapColor = { border: "border-overlap-border", bg: "bg-overlap", hover: "hover:bg-overlap-hover" };



const SlotCard = ({ name, type, memberId, onClick }: SlotCardProps) => {
    let colors = engineerColors[1];
    if (type === "candidate") {
        colors = candidateColor;
    } else if (type === "overlap") {
        colors = overlapColor;
    } else {
        colors = engineerColors[memberId] ?? engineerColors[1];
    }

    return (
        <div onClick={onClick} className={clsx("cursor-pointer rounded-md w-full h-full flex items-center justify-center px-2 border-l-[4px]", colors.border, colors.bg, colors.hover)} >
            <span className="font-header text-xs">{name} {type === "overlap" && <span className="opacity text-[12px] text-orange-300">★</span>}</span>
            <span className="font-header text-xs"></span>
        </div>
    )
}

export default SlotCard