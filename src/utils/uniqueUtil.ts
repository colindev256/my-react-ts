// Selecting 5 unique random jockeys

export const getUniqueJockeys = <T>(anyArray: Array<T>) => {
    
    let uniqueArray: T[] = [];
    
    while (uniqueArray.length < 5) {
        const unique = Math.floor(Math.random() * anyArray.length);
        if (uniqueArray.indexOf(anyArray[unique]) > -1) {
            continue;
        }
        uniqueArray.push(anyArray[unique]);
    }
    
    return uniqueArray;
};