module.exports = function toReadable (number) {
    const before_20 = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
        'seventeen', 'eighteen', 'nineteen'];
    const tenth = ['','', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty',
        'ninety'];
    const string = String(number)

    if(number === 0){
        return 'zero'
    }
    if (number < 20){
        return before_20[number]
    } else if (string.length === 2 && number%10===0){
        console.log(string[0])
        return tenth[Number(string[0])]
    } else if (string.length === 2 && number%10!==0){
        return tenth[Number(string[0])]+" "+before_20[string[1]]
    } else {
        if(number%100===0){
            return before_20[string[0]] + ' hundred';
        } else {
            return before_20[string[0]] + ' hundred ' + toReadable(Number(string.slice(1)))
        }
    }
}
