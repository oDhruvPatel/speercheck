import generateSlots from "../libs/getTime"
import generateDays from "../libs/getDays";
const Calender = () => {
    const slots = generateSlots();
    const days = generateDays();
    console.log(days);
    console.log(slots);
    return (
        <>

        </>
    )
}

export default Calender