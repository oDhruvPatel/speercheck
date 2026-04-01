import dayjs from "dayjs";

const generateSlots = () => {
    const slots = [];
    let current = dayjs().hour(9).minute(0); //start from 9am
    const end = dayjs().hour(18).minute(0); //end at 6pm

    while (current.isBefore(end)) {
        slots.push(current.format("HH:mm"));
        current = current.add(30, "minute"); //add 30 mins in each slot
    }

    return slots;
};

export default generateSlots;
