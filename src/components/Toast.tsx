interface ToastProps {
    engineer?: string;
    candidate?: string;
    date?: string;
    time?: string;
}
const Toast = ({ engineer, candidate, date, time }: ToastProps) => {
    return (
        <div className="text-white absolute top-5 left-5">
            {`Interview scheduled for ${candidate} with ${engineer} on ${date} at ${time}`}
        </div>
    )
}

export default Toast