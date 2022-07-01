//@param {number} x
//@return {boolean}

//link: https://leetcode.com/problems/palindrome-number/submissions/

 var isPalindrome = function(x) {
    let number = (x).toString();
    console.log(number);
    outer:for(let i = 0; i<number.length;){
        inner:for(let j = number.length-1; j >= 0;){
            console.log(`сравниваются ${number[i]} и ${number[j]}`);
            if((number.length%2!=0)&&((number[i]!=number[j]))){
                console.log(`сравниваются ${number[i]} и ${number[j]}`);
                return false;
            }
            else if((number.length%2==0)&&(number[i]!=number[j])){
                return false;
            }
            else{
                i++;
                j--;
            }
        }
    }
    return true;
};