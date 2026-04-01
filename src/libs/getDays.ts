import dayjs from "dayjs";

//interface to define the structure of a day
interface Day {
    label: string;
    day: string;
    today: boolean;
}

const generateDays = () => {
    const days: Day[] = [];
    const startOfWeek = dayjs().startOf("week").add(1, "day"); //start is sun so add 1Day to it to make it Mond
    for (let i = 0; i < 5; i++) {
        const date = startOfWeek.add(i, "day");

        //push the day into the days array
        days.push({
            label: date.format("ddd"),
            day: date.format("DD"),
            today: date.isSame(dayjs(), "day")
        });
    }

    return days;

}

export default generateDays;