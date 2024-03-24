function speedDetectors(speed){
    // in the line above there' a fnction that allows one to input the speed at which the car is moving
    let demeritPoints;
//    in the line above I have declared a variable using the constant let
    if (speed<=70){
        // in the line above I have intoduced a conditional that checks if the speed is less than or equal to 70
        demeritPoints="OK";
        //  if the speed is less than the speed limit then no demerit points are awarded
    }else if (speed<75){
        // in this statement the speed is slightly above the speed limit but has not yet passed the speed limit hence no demerit points are awarded
        demeritPoints=0;
    }else if (speed<80){
        // here the speed is well above 75 so a demerit point is awarded
        demeritPoints=1;

    }else if (speed<85){
        demeritPoints=2;
    }else if (speed<90){
        demeritPoints=3;
    }else if (speed<95){
        demeritPoints=4;
    }else if (speed<100){
        demeritPoints=5;
    }else if (speed<105){
        demeritPoints=6;
    }else if (speed<110){
        demeritPoints=7;
    }else if (speed<115){
        demeritPoints=8;
    }else if (speed<120){
        demeritPoints=9;
    }else if (speed<125){
        demeritPoints=10;
    }else if (speed<130){
        demeritPoints=11;
    }else if (speed>=135){
        // here the maximum demerit points one can have is 12 so the license is automatically suspended
        demeritPoints="LicenseSuspended!"
    }return demeritPoints;
    }
    // to make sure that the code works i have invoked the function "speedDetectors"

console.log(speedDetectors(150));