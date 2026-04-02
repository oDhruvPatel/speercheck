interface Availability {
    [date: string]: string[];
}

interface Member {
    id: number;
    name: string;
    availability: Availability;
}

export const engineers: Member[] = [
    {
        id: 1,
        name: "Alex Johnson",
        availability: {
            "2026-03-30": ["09:00", "10:30", "11:00"],
            "2026-03-31": ["09:30", "10:00", "14:00"],
            "2026-04-02": ["09:00"],
        }
    },
    {
        id: 2,
        name: "Rita Mehra",
        availability: {
            "2026-04-01": ["10:30", "11:00", "11:30", "15:30"],
            "2026-04-03": ["10:00", "10:30", "11:00"],
        }
    },
    {
        id: 3,
        name: "Tom Lin",
        availability: {
            "2026-04-02": ["15:00", "15:30", "16:00"],
            "2026-04-03": ["13:00", "13:30", "14:00", "14:30"],
            "2026-04-01": ["11:30"],
        }
    }
]

export const candidates: Member[] = [
    {
        id: 1,
        name: "Sarah Kim",
        availability: {
            "2026-04-01": ["11:30", "14:30", "15:00", "15:30", "16:00", "16:30"],
        }
    },
    {
        id: 2,
        name: "John Doe",
        availability: {
            "2026-04-02": ["13:00", "13:30", "14:00", "14:30", "15:00", "15:30"],
        }
    }
]