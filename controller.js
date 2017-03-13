/**
 * Created by Alok on 3/11/2017.
 */
function countCoins(){
    var amt = document.getElementById("total-amt").value;
    // var num= amt.indexOf(".");
    // var amt1= amt.substr(0,num);
    // var amt2=amt.substr(num+1,amt.length);

    amt=parseInt(amt);
    //amt=amt.toFixed(2);
    //alert(amt + " "+ amt1+ " "+amt2);
    var coinArray=[];
    var coinCount=[];
    for(var i=0;i<4;i++){
        var element=parseInt((document.getElementById("coin"+i)).value);
        coinArray.push(element);
    }

    var tempArray=coinArray.slice();

    tempArray.sort(function(a, b){return b-a});

    console.log(coinArray);
    console.log(tempArray);

    var count;

        for(var j=0;j<4;j++){
            count = amt/tempArray[j];
            count=parseInt(count);
            console.log("count value " + count);
            //coinCount.push(count);
            var coinCountIndex = coinArray.indexOf(tempArray[j]);
            coinCount[coinCountIndex]=count;
            amt=amt%tempArray[j];
            if(amt==0){
                console.log(coinCount);
                document.getElementById("firstC").value=coinCount[0];
                document.getElementById("secondC").value=coinCount[1];
                document.getElementById("thirdC").value=coinCount[2];
                document.getElementById("fourthC").value=coinCount[3];
                return;
            }
        }
    //console.log(document.getElementById("fourthC").value);


}