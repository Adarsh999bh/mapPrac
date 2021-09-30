map1=new Map()
map1.set(1,0)
map1.set(2,0)
map1.set(3,0)
map1.set(4,0)
map1.set(5,0)
map1.set(6,0)
while(true){
    let num=Math.floor(Math.random() * 6) + 1
    map1.set(num,map1.get(num)+1)
    if(map1.get(num)==10){
        console.log(map1)
        console.log(num +" has occurred 10 times")
        break
    }
}


console.log("minimum value")
var minval=Math.min(...map1.values())
for(const [key,val] of map1.entries()){
    if(val==minval){
        console.log(key+" has occurred "+val+" times")
    }
}
