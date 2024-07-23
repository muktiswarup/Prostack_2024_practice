class Hospital{     // class
    name= 'Narashima Reddy';    // property
    patient(){                  // methods
        console.log('The no of patient is 1000')
    };
    doctor(){
        console.log('The no of dog is 25');
    }
    management(){
        console.log('The hospital management is very good');
    }
}
const h1=new Hospital();                    // object 
h1.patient();
h1.doctor();                            // accesing the object 
h1.management();
console.log(h1.name);                                                   // accessing the property



class  School{
    name= 'Budha giri bidyaa pitha ';
    teacher(){
        console.log('Teachers are there')
    }
}
const h2= new School();
h2.teacher();
console.log(h2.name);