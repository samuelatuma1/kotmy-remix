export function parseDateForInput(date = new Date().toISOString()) {
    let d = date.split('T')[0]
    
    return d
}
export function parseDateTimeForInput(_date = new Date().toISOString()) {
    
    let date = new Date(_date);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    // Return the required string format
    return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export function formatDate(date?: number | Date, options: Intl.DateTimeFormatOptions = {}) {
    return new Intl.DateTimeFormat('en-NG', options).format(date)
}