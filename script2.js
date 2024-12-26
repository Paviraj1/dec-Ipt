// console.log("hello");
class parent{
    car()
    {
        console.log("BMW")
    }
    bike()
    {console.log("royal enfild")} 

}
class child1 extends parent{
    money()
    {
        console.log("10000$")
    }
}


class child2 extends parent {
    jewels() 
    {
        console.log("1KG")
    }

    house()
    {
        console.log("House document")
    }
}

var childs1 = new child1()
var childs2 = new child2()
childs1.money()
childs1.bike()
childs2.jewels()
childs2.house()
childs2.car()