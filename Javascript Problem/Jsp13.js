const fetchData= async ()=>{

        try {
            
            const response= await fetch('https://fakestoreapi.com/users')
            const data= await response.json();
            console.table(data)
        } catch (error) {
            console.error(error)
        }
}
fetchData();