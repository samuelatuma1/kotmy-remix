export function numberSlang(value: number) {
    if (value >= 1000000000) return `${(value / 1000000000)}b`
    else if (value >= 1000000) return `${(value / 1000000)}m`
    else if (value >= 1000) return `${(value / 1000)}k`
    else return value
}

export function numberFormatter(number: number, options: Intl.NumberFormatOptions = {}) {
    return new Intl.NumberFormat('en-NG', options).format(number)
}
export function toOrdinal(n: number): string {
    const num = Math.abs(Math.trunc(n));
    const mod100 = num % 100;
    const mod10 = num % 10;
    
    const suffix = (mod100 >= 11 && mod100 <= 13) 
        ? "th" 
        : (["th", "st", "nd", "rd"][mod10] || "th");
        
    return `${n}${suffix}`;
}