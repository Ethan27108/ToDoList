function localStorageCreator(){
  var table = document.getElementById("myTable");

  var data = [];

  for (var i = 0, row; row = table.rows[i+1]; i++) {
      var rowData = [];
      for (var j = 0, cell; cell = row.cells[j]; j++) {
        if (j < 3){rowData.push(cell.innerText)}
        else if (j==3){rowData.push(cell.firstChild.checked)}
        else{}
      }
      data.push(rowData);
  }

  localStorage.setItem("tableData", JSON.stringify(data));
}









function getStorage() {

  function getTableDataFromLocalStorage() {
    var storedData = localStorage.getItem("tableData");

    if (storedData) {
      var data = JSON.parse(storedData);


      return data;
    } else {
      return [];
    }

  }




  tableLocal=getTableDataFromLocalStorage();
  for (let i = 0; i < tableLocal.length; i++){
    createUseStore(i);
  }



}


function createUseStore(i){
  var task = tableLocal[i][0];
  var date = tableLocal[i][1];
  var priority = tableLocal[i][2];
  var checkboxOnOff = tableLocal[i][3];

  var table = document.getElementById("myTable");
  var button = document.createElement("button");
  button.innerHTML = priority;
  button.addEventListener("click", () => {
    checker = button.innerHTML;
    if (checker == "Low") {
      button.innerHTML = "Medium";
      if (row.id!="Finished"){
        row.id="Medium";
      }

    }
    else if (checker == "Medium") {
      button.innerHTML = "High";
      if (row.id!="Finished"){
        row.id="High";
      }
    }
    else if (checker == "High") {
      button.innerHTML = "Low";
      if (row.id!="Finished"){
        row.id="Low";
      }
    }
  });

  var buttondel = document.createElement("button");
  buttondel.innerHTML = "Delete";
  buttondel.addEventListener("click", () => {
    row.remove(row);
  });
  var checkbox = document.createElement("input");
  checkbox.type="checkbox";

  if (checkboxOnOff){
    checkbox.innerHTML="Finished";
    checkbox.checked=true;
  }
  else{
    checkbox.innerHTML="notFinished";
  }

  checkbox.addEventListener("click", () => {

    if (checkbox.checked){
      checkbox.innerHTML="Finished"
      row.id="Finished";

    }
    else{
      checkbox.innerHTML="notFinished"
      row.id=button.innerHTML;

    }

  })



  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = task;
  cell2.innerHTML = date;
  cell3.appendChild(button);
  cell4.appendChild(checkbox);
  cell5.appendChild(buttondel);
  if (checkboxOnOff){
    row.id="Finished";
  }
  else{
    row.id=priority;
  }

}

function createFunction() {
  // Call the function when the page loads

  var newTask = document.getElementById("newTask").value;
  var dueDate = document.getElementById("dueDate").value;
  var table = document.getElementById("myTable");
  var button = document.createElement("button");
  button.innerHTML = "Low";
  button.addEventListener("click", () => {
    checker = button.innerHTML;
    if (checker == "Low") {
      button.innerHTML = "Medium";
      row.id="Medium";
    }
    else if (checker == "Medium") {
      button.innerHTML = "High";
      row.id="High";
    }
    else if (checker == "High") {
      button.innerHTML = "Low";
      row.id="Low";
    }
  });

  var buttondel = document.createElement("button");
  buttondel.innerHTML = "Delete";
  buttondel.addEventListener("click", () => {
    row.remove(row);
  });


  var checkbox = document.createElement("input");
  checkbox.type="checkbox";
  checkbox.addEventListener("click", () => {

    if (checkbox.checked){
      checkbox.innerHTML="Finished"
      row.id="Finished";

      row.style.backgroundColor="90EE90";
    }
    else{
      checkbox.innerHTML="notFinished"
      row.id=button.innerHTML;
      row.style.backgroundColor="FFFFFF";

    }

  })



  var row = table.insertRow(table.length);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);
  cell1.innerHTML = newTask;
  cell2.innerHTML = dueDate;
  cell3.appendChild(button);
  cell4.appendChild(checkbox);
  cell5.appendChild(buttondel);
  row.id="Low"

}

function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  const order = ["Finished","Low","Medium","High"]
  while (switching) {
    switching = false;
    rows = table.rows;
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i];
        y = rows[i + 1];
        if (order.indexOf(x.id)<order.indexOf(y.id) ) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
