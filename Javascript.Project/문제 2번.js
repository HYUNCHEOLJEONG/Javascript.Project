let number;
let i =0;
while(i<9){
    for(let j=0;j<9;j++){
        if(j%2 ==0){
            continue;
        }
        else{
            console.log((i+1),"*",(j+1)+"\n");
       
        }
    }

i++;

}