function printRelation(number, gender)
{
    let relation;
    if(gender == 'f' && number > 0)
    {
        relation = "daughter"
    }
    else if(gender == 'f' && number < 0)
    {
        relation = "mother"
    }
    else if(gender == 'm' && number > 0)
    {
        relation = "son"
    }
    else
    {
        relation = "father"
    }

    switch(number)
    {
        case -3:
        case 3:
            console.log("great grand" + relation);
            break;
        case -2:
        case 2:
            console.log("grand" + relation);
            break;
        case -1:
        case 1:
            console.log(relation)
            break;
        case 0:
            console.log("me");
            break;
    }

}

let number = -3
let gender = 'm'

printRelation(number, gender)