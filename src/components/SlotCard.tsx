import clsx from "clsx";

interface SlotCardProps {
    name: String;
    type: "engineer" | "candidate" | "overlap";
    engId: number;
    onClick?: () => void;
}


const engineerColors: Record<number, { border: string, bg: string, hover: string }> = {
    1: { border: "border-eng-red-border", bg: "bg-eng-red", hover: "hover:bg-eng-red-hover" },
    2: { border: "border-eng-purple-border", bg: "bg-eng-purple", hover: "hover:bg-eng-purple-hover" },
    3: { border: "border-eng-green-border", bg: "bg-eng-green", hover: "hover:bg-eng-green-hover" },
    4: { border: "border-eng-orange-border", bg: "bg-eng-orange", hover: "hover:bg-eng-orange-hover" },
    5: { border: "border-eng-blue-border", bg: "bg-eng-blue", hover: "hover:bg-eng-blue-hover" },
};

const SlotCard = ({ name, type, engId, onClick }: SlotCardProps) => {
    const colors = engineerColors[engId];
    return (
        <div onClick={() => console.log(name)} className={clsx("rounded-md w-full h-full flex items-center justify-center px-2 border-l-[4px]", colors.border, colors.bg, colors.hover)} >
            <span className="font-header text-xs">{name}</span>
            <span className="font-header text-xs"></span>
        </div>
    )
}

export default SlotCard