function makeNext(a, b){
    let result = [];
    let resultItem = a;
    while(resultItem<=b){
        result.push(resultItem);
        resultItem = resultItem + Math.floor(resultItem/10000) +Math.floor(resultItem/1000)+Math.floor(resultItem/100)+Math.floor(resultItem/10)+Math.floor(resultItem%10);
    }
    return result;
}

// 입력된 값의 생성된 값을 구하는 함수


for(let i = 1; i<= 100; i+=1){
    for(let j = 1; j<=i; j+=1){
        
        if(makeNext(j, i)==i){
            console.log(i,j,"=",makeNext(j, i));
            console.log(i);
        }
    }
}

// 입력된 값이 생성자인지 아닌지가 판정해야함.
// 그러기 위해서는 입력된값보다 작은 값의 배열을 구했을때, 배열안에 입력된 값이 없어야함.
// 1. 입력된 값보다 작은 값들의 배열을 순차적으로 구해야함.
// 2. 순차적으로 구한 배열값 안에 입력된 값이 있으면 그 입력된 값은 