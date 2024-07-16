let employees=[
    {eid:101,ename:'Rahul',sal:45000},
    {eid:102,ename:'Sonia',sal:55000},
    {eid:103,ename:'Priya',sal:65000}
]

function display_EmployeeData(){
    let rows=''
    for(emp of employees){
        rows= rows+ `<tr> 
        <td>${emp.eid}</td>
        <td>${emp.ename}</td>
        <td>${emp.sal}</td>
        </tr>
        `
    }
    document.getElementsByTagName('tbody')[0].innerHTML=rows;
}
