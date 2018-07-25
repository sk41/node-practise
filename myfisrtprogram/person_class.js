function person(first,last, age, height) {
    this.first = first;
    this.last = last;
    this.age = age;
    this.height=height;
    this.fullname=function()
    {
        document.write(this.first+" "+this.last);
    }
}

var p1 = new person("John","kelly", 42, 5.8);
var p2 = new person("Amy","solly",21, 5.6);

document.write(p1.age+"<br/>");
document.write(p2.first+"<br/>");
p1.fullname();
