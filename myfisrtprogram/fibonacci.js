function fib_number(n)
{
    document.write("<h3> First "+n+" fibonacci numbers</h3>");
    var fib=0,fib1=1;
    for(var i=0;i<n;i++)
    {
        fibo=fib1+fib
        fib=fib1
        fib1=fibo
        document.write(fibo+"</br>");
    }
}
var number=prompt("Enter the number:")
fib_number(number)