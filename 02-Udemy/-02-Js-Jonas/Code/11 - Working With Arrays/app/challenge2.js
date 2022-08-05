/**CHALLENGE TWO **/
/**
 * first task -> looping on array and make operation on it is element
 *
 */
let dogsAge = [5, 2, 4, 1, 15, 8, 4];

 CHALLENGE2=(ages)=>{
    let humanAges=ages.map((age)=>{
        let humanAge;
        if(age<=2){
        humanAge=age*2;
        return humanAge;
        }
        if(age>2){
            humanAge=16+age*4;
            return humanAge;
        }})

    let adult=humanAges.filter(age=>age>=18);
    let averageAges=adult.reduce((accumaltor,current)=>{
    return accumaltor+current/adult.length;
    },0)
    return averageAges;
}
console.log('average ', CHALLENGE2(dogsAge));
