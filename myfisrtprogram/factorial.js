function fact(x)
{
    if(x==1)
    return 1;
    res=fact(x-1)*x;
    return res;

}

var number=prompt("Enter the number to find factorial.")
document.write(fact(number))