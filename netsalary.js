 function netSalary(basicSalary,benefits){
    let tax,nhif,netSalary,nssf;
    let grossSalary=basicSalary+benefits;
    tax=(myTotal)=>{
        if (myTotal<=24000){
            return myTotal*0.01;
        }
        else if(myTotal>24000 && myTotal <=32333){
            
            return myTotal*0.25;
        }
        else if (myTotal>32333 && myTotal<=500000){
            return myTotal*0.30;
        }else if(myTotal>500000 && myTotal<=800000){
            return myTotal*0.325;
        }else if (myTotal>800000){
            return myTotal*0.35;
        }
    }
    nhif=(myTotal)=>{
        if (myTotal<=5999){
            return 150;
        }else if(myTotal>5999 && myTotal<=7999){
            return 300;
        }else if(myTotal>7999 && myTotal<=11999){
            return 400;
        }else if (myTotal>11999 && myTotal<=14999){
            return 500;
        }else if(myTotal>14999 && myTotal<=19999){
            return 600;
        }else if (myTotal>19999 && myTotal<=24999){
            return 750;
        }else if (myTotal>24999 && myTotal<=34999){
            return 850;
        }else if (myTotal>34999 && myTotal<=39999){
            return 900;
        }else if (myTotal>39999 && myTotal<=44999){
            return 1000;
        }else if (myTotal>44999 && myTotal<=49999){
            return 1100;
        }else if (myTotal>49999 && myTotal<=59999){
            return 1200;
        }else if (myTotal>59999 && myTotal<=69999){
            return 1300;
        }else if (myTotal>69999 && myTotal<=79999){
            return 1400;
        }else if (myTotal>79999 && myTotal<=89999){
            return 1500;
        }else if (myTotal>89999 && myTotal<=99999){
            return 1600;
        }else if (myTotal>99999){
            return 1700;
        }
    }
    nssf=(myTotal)=>{
        let nssf;
        if(myTotal<=7000){
            nssf=0.06*myTotal;
            return nssf
        }else if(myTotal>7000){
            nssf=0.06*7000+0.06*(myTotal-7000)
            return nssf
        }
    }
    netSalary =grossSalary-tax(grossSalary)+nhif(grossSalary)+nssf(grossSalary)
    return netSalary;
}
// input your value here
console.log (netSalary(50000,40000))