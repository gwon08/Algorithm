function solution(my_string, is_prefix) {
    var answer = 0;
    if(my_string<is_prefix){
        return 0;
    }
    for(let i = 0; i<my_string.length; i++){
        if(is_prefix[i]==my_string[i]){
            return 1
        }
        else if(is_prefix[i]!=my_string[i]){
            return 0;
        }
    }
}
