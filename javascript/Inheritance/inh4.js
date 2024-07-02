class Parent{
    m1(){
        console.log('Hi i am parent class method');
    }
}
class Child extends Parent{
    m2(){
        console.log('hi iam child class');
    }
}
class Child2 extends Parent {
    m3(){
        console.log('hi iam 2nd child class')
    }
}
const obj1= new Child();
const obj2= new Child2();
obj1.m1();
obj1.m2();
obj2.m1();
obj2.m3();
