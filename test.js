//array shuffler
function shuffle(array){
let randomArray = [];
let copy = array;
for(let z=0;;z++){
let j = Math.floor(Math.random()*array.length);
if(!randomArray.includes(j)){
    randomArray.push(j);
}
if(randomArray.length===array.length) break;
}
for(let i=0;i<array.length/2;i++){
let term = array[i];
    array[i]=array[randomArray[i]]
array[randomArray[i]]=term;
}
return array;
       }
//array sorter
function sorter(array){
    array.sort((a,b)=>a-b) //b-a for decreasing order
}
//statistics calculator
function mean(array){
let sum = 0;
        for(let i = 0;i<array.length;i++){
            sum+=array[i]
        }
        return sum / array.length;
}
function variance(array){
    let meanOrg = mean(array);
let variance = mean(array.map(item=>(item-meanOrg)**2))
return variance;
}
function deviation(array){
return Math.sqrt(variance(array))
}
function median(array){
let sortedArray = array.sort((a,b)=>a-b);
if(array.length===2){
return (array[0]+array[1])/2;
}
        else if(array.length%2===0){
    return  (sortedArray[array.length/2]+sortedArray[(array.length/2)+1])/2;
        }
        else if(array.length%2===1){
           return sortedArray[(array.length+1)/2 - 1] }
}
function range(array){
    let sortedArray = array.sort((a,b)=>a-b);
let range = sortedArray[array.length-1]-sortedArray[0]
return range;
}
function mode(array){
    let counter = {}
    for(let i=0;i<array.length;i++){
        let temp =array[i];
        if(counter[temp]){
            counter[temp]+=1
        }
        else{
             counter[temp]=1
        };
    }
    const highest = Object.keys(counter).sort((a,b)=>counter[b]-counter[a])[0];
    let mode = Object.keys(counter).filter(el=>counter[el]===counter[highest])
    return mode;
    
}
       function stats(array){
        return {"mean":mean(array),"median":median(array),"range":range(array),"variance":variance(array),"deviation":deviation(array)}
       }