export function isoToLocalDate(isoDate: string): string {
    const date = new Date(isoDate);
    const localDate =  doubleDigitPad(date.getDate()) + ' / ' + doubleDigitPad(date.getMonth() + 1) + ' / ' + date.getFullYear();
    return localDate;
}

function doubleDigitPad(input: number): string {
    if(input < 10) {
        return `0${input}`;
    }
    return `` + input;
}