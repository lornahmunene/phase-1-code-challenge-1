// line 2 contains a function "studentGrade"with a parameter "score"
function studentGrade(score)
{
    if (100<score>79){
        // in line 4 there is a conditional that checks if the score is greater than 79
        return 'A';
        //  returns grade"A"as the output
    }else if (score>60){
        // in line 8 the conditional checks if the score is greater 60 since greater than 79 is a falsey statement
        return 'B';
        // returns grade"B" as the output
    }else if(score>49){
        // in line 12 the conditional continues to check if the score has met the mentioned criteria since the above statements are falsey
        return 'C';
        // returns grade "C" as the output
    }else if(score>40){
        // in line 16 the same continues if the value has not met the above mentioned criteria
        return 'D';
    }else if(0>score<40){
        return 'E'
    }
    }
    // to test if the function works it is invoked in the following line 
    console.log(studentGrade(50))

