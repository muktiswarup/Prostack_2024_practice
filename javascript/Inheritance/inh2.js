// Single Inheritance .........

class Parent{
    m1(){
        console.log('Parrent class member 1')
    }
    m2(){
        console.log('Parent class member 2');
    }
}
class Child extends Parent{
    m3(){
        console.log('child class member');
    }
}
let obj1= new Child();
obj1.m1();
obj1.m2();
obj1.m3();