function solution(num_list) {
    let answer1 = 0;
    let answer2 = 1;
    for(let i=0; i<num_list.length; i++) {
        answer2 *= num_list[i];
        answer1 += num_list[i];
       
    }
    answer1 = answer1*answer1;
    if(answer2<answer1){
        return 1;
    }
    return 0;
}