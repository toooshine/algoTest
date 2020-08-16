const arrayToIncrement = [9,9,9];

// Handle array increment operation
const increment = (arrayOfNumber) => {
    if(validateArray(arrayOfNumber)){
    let copyArrayToIncrement = [...arrayToIncrement]
    copyArrayToIncrement[copyArrayToIncrement.length -1]++;

    for( let i=copyArrayToIncrement.length; i>=0; i--){
       if (copyArrayToIncrement[i] === 10 && i !==0){
        copyArrayToIncrement[i]=0;
        copyArrayToIncrement[i-1]++
       } else if(copyArrayToIncrement[i] === 10 && i===0){
        copyArrayToIncrement[i]=0;
        copyArrayToIncrement.unshift(1)
       }
    }
        return (`[${arrayToIncrement}] => [${copyArrayToIncrement}]`)
    }else{
         console.log('Array below is not valid, please assign numbers between 0 to 9');
         return arrayToIncrement;
        }
    }

    // Validate if each array item provide good condition
const validateArray = array => {
    let valid = true;
    array.map(item => {
        if(item<0 || item>9){
            valid = false;
            return valid;
        }
    })
    return valid;
}

console.log(increment(arrayToIncrement));