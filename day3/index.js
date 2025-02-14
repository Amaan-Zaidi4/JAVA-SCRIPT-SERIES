let x=5;
if (x>10){
    console.log("x is greater than 10");
    
}
else{
    console.log("x is less than or equal to 10");
    
}
// query 1 if reminder = 0 print the statement true //
let num1=13;
let num2=2;
    if(num1%num2 == 0){
        console.log(true); 
    }
    else{
        console.log(false); 
    }
     
    // use of prompt //
    // let num3=prompt("enter your number");
    // let num4=2;
    // if(num3%num4 == 0){
        // console.log(true); 
    // }
    // else{
        // console.log(false); 
    // }

    // query 2 
    // let marks =prompt("enter your marks");
    //let grade;
    //switch (true) {
    //  case marks>= 41 && marks<=50:
    //      grade="A"
    //      break;
    //   case marks>= 41 && marks<=50:
    //        grade="A"
    //        break;
    //    case marks>= 31 && marks<=40:
    //      grade="B"
    //      break;
    //   case marks>= 21 && marks<=30:
    //       grade="C"
    //       break;
    //   case marks>= 11 && marks<=20:
    //        grade="D"
    //       break;
    //   case marks>= 0 && marks<=10:
    //        grade="E"
    //       break;
    //   default:
    //       grade="invalid marks"
    //        break;
    // }
    // console.log(grade);

    // query 3 print the days of weeks? //
    
    let number=prompt("enter your  number");
    let days;
    switch (true){
        case number == 1:
            days="monday"
            break;
            case number == 1:
             days="monday"
            break;
            case number == 2:
             days="tuesday"
            break;
            case number == 3:
             days="wednesday"
            break;
            case number == 4:
             days="thursday"
            break;
            case number == 5:
             days="friday"
            break;
            case number == 6:
             days="saturday"
            break;
            case number == 7:
             days="sunday"
            break;
            default:
            days="invalid number"
            break;
    }
    console.log(days);
    
    