// multilevel inheritance.........
class Gp{
    m1(){
        console.log('This method is m1');
    }
    m2(){
        console.log('this method is m2');
    }
}
class Parent extends Gp{
    m3(){
        console.log('this method is m3');
    }
    m4(){
        console.log('this method is m4')
    }
}
class Child extends Parent{
    m5(){
        console.log('his pen is good..')
    }
}
let obj1= new Child();
let obj2= new Parent();
obj1.m3();
obj1.m5();
obj1.m1();
obj2.m1();
