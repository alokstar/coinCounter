/**
 * Created by Alok on 3/11/2017.
 */
function countCoins(){
    var amt = document.getElementById("total-amt").value;

    amt=parseInt(amt);
    var coinArray=[];
    var coinCount=[];
    for(var i=0;i<4;i++){
        var element=parseInt((document.getElementById("coin"+i)).value);
        coinArray.push(element);
    }

    var flag=0;
    for(var i=0;i<coinArray.length;i++){
        if(coinArray[i]==1){
            flag=1;
            break;
        }
    }
    if(flag==0){
        alert("At least one of the coin values should be 1!");
        return;
    }

    //copying contents of coinArray into tempArray
    var tempArray=coinArray.slice();

    //sorting tempArray
    tempArray.sort(function(a, b){return b-a});

    var count;
    coinCount=[-1,-1,-1,-1];
        for(var j=0;j<4;j++){
            count = amt/tempArray[j];
            console.log(count);
            count=parseInt(count);
            console.log("count value " + count);
            var coinCountIndex = coinArray.indexOf(tempArray[j]);

            //if the value is duplicate
            while(coinCount[coinCountIndex]!=-1){
                var tempCoinCountIndex=coinCountIndex;
                coinCountIndex = coinArray.indexOf(tempArray[j],tempCoinCountIndex+1);
            }

            coinCount[coinCountIndex]=count;
            amt=amt%tempArray[j];
            if(amt==0){
                console.log(coinCount);
                for(var i=0; i<coinCount.length;i++){
                    if(coinCount[i]==(-1)){
                        coinCount[i]=0;
                    }
                }
                document.getElementById("firstC").value=coinCount[0];
                document.getElementById("secondC").value=coinCount[1];
                document.getElementById("thirdC").value=coinCount[2];
                document.getElementById("fourthC").value=coinCount[3];
                return;
            }
        }

}