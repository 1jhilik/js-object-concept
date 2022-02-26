const bottle = {
    color:'yellow',
     hold:'water',
    price: 50, 
    isCleaned:true
};
/* 
for(let i = 0; i< 10; i++){}
for(const num of numbers){} //array like obj te at use kora vlo
for(const prob in student){} //object a apply ar jonne
*/
for(const prob in bottle) {
    // console.log(prob,bottle[prob]);
}

//array ar jonne-
const keys = Object.keys(bottle);
// console.log(keys);
for(const prob of keys){
    // console.log(prob,bottle[prob]);
}

//advanced
const entries = Object.entries(bottle);
// console.log(entries);
// const [key, value] = ['color', 'yellow'];
for(const [key, value] of Object.entries(bottle)){
    console.log(key, value);

}