function solution(a, b) {
    let answer1;
    let answer2;
    a = a.toString();
    b = b.toString();
    answer1 = a+b;
    answer2 = b+a;
    if(answer1>answer2){
    return +answer1;
    }
    else if(answer2>answer1){
        return +answer2;
    }
    else return +answer1;
    return answer;
}