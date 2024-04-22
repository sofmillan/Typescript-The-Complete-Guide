export const dateStringToDate = (dateString:string): Date =>{
    const dateFragments = dateString
    .split('/')
    .map((value:string):number =>{
        return parseInt(value);
    })

    return new Date(dateFragments[2], dateFragments[1]-1, dateFragments[0]);
}