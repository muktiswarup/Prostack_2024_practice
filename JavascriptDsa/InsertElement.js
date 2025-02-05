let data = [12,32,52,58,65,47,96];
let newele=75;
let position =2;
console.log(data);
for (let i=data.length-1;i>=position;i--){
    data[i+1]=data[i];
    if(i==position){

        data[position]=newele;
    }
}
console.log(data);