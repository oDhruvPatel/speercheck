//takes two lists of times and returns the common ones. it immitates my overlaping avialbility logic 
function findOverlap(engineerSlots: string[], candidateSlots: string[]): string[] {
    return candidateSlots.filter(time => engineerSlots.includes(time));
}

describe("Interview Overlap Logic", () => {

    it("should find the common time slot (10:00) when both are available", () => {

        const engineerTimes = ["09:00", "10:00", "11:00"];
        const candidateTimes = ["10:00", "14:00"];

        const commonSlots = findOverlap(engineerTimes, candidateTimes);

        expect(commonSlots).toContain("10:00");
        expect(commonSlots.length).toBe(1);
    });

    it("should return an empty list if there are no common times", () => {
        const engineerTimes = ["09:00"];
        const candidateTimes = ["10:00"];

        const commonSlots = findOverlap(engineerTimes, candidateTimes);

        expect(commonSlots).toEqual([]); // Expect nothing to overlap
    });

});
