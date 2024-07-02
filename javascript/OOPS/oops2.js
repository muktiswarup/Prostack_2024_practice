class Sports{
    name = 'Chandra sekhar jena';

    cricket(){
        console.log(`${this.name} is playing cricket now. Please do not disturb him`);
    }
    football(name){
        console.log(`${name} is playing football.`)
    }
}
const sp1=new Sports();
sp1.cricket();
sp1.football('Shakti Swarup Jena');