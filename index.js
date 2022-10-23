let btn = document.getElementById('submit_btn')
    let attendence = document.getElementById('is_present')
    let table = document.getElementById("table");
    let name = document.getElementById("name_inp");
    let tr = document.querySelector('tr')
    // add new user to the table
    function addNewUser() {
        var row = table.insertRow(1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2)
        var cell4 = row.insertCell(3);
    
        cell1.innerHTML = name.value;
        cell2.innerHTML = attendence.checked ? "Present" : "Absent";
        cell3.innerHTML = new Date().toLocaleString("en-IN");
        cell4.innerHTML = "Remove"
        
    
    }
    
    //event listener to click and updates the content
    btn.addEventListener('click', () => {
        if (name.value != "") {
            addNewUser();
        } else {
            alert("Input is empty");
        }
    })
    
    const tBody = document.querySelector('#result')
    
    tBody.addEventListener('click', (e) => {
    
    
        if(e.target.innerText==="Remove"){
            e.target.closest('tr').remove()    
        }
      })