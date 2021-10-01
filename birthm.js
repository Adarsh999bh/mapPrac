let dict = {};
let months = ['jan','feb','march','april','may','june','july','aug','sep','oct','nov','dec'];
let year = ['1992','1993'];
for(let i =1;i<=50;i++){
    let randomYearIndex = Math.floor((Math.random()*2));
    let randomMonthIndex = Math.floor((Math.random()*12));
    dict["person "+i] = months[randomMonthIndex] + " "+ year[randomYearIndex];
}
let month = 'jan'
console.log("People born in "+month+" are");
for(key in dict){
    let temp = dict[key].split(" ");
    if(temp[0] == month)
        console.log(key+" born on "+ dict[key])
}