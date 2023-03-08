function extractValue(arr, key){
    return arr.reduce(function(accum, nextVal){
        accum.push(nextVal[key]);
        return accum;
    });
}

function vowelCount(str){
    const vowels = 'aeiou';
    return str.split('').reduce(function(accum, nextChar){
        let lowerCased = nextChar.toLowerCase();
        if(vowels.indexOf(lowerCased) !== -1){
            if(accum[lowerCased]){
                accum[lowerCased]++;
            }
            else{
                accum[lowerCased] = 1;
            }
        }
        return accum;
    }, {});
}

function addKeyAndValue(arr, key, value){
    return arr.reduce(function(accum, next, idx){
        accum[idx][key] = value;
        return accum;
    }, arr);
}

function partition(arr, cb){
    return arr.reduce(function(accum, next){
        if(cb(next)){
            accum[0].push(next);
        }
        else{
            accum[1].push(next);
        }
        return accuml

    }, [[],[]]);
}