



   var BookNameInput = document.getElementById('BookName');
   var WebsiteURLInput = document.getElementById('WebsiteURL');
   var prouductList=[];
function submit(){
   
    var prouduct ={
        Name  : BookNameInput.value,
        url : WebsiteURLInput.value,
    }
    
   clearform()
    prouductList.push(prouduct)

    displayData();
   console.log(prouductList);   
}
function clearform(){
    BookNameInput.value = null;
    WebsiteURLInput.value =null;
}
function displayData(){
   
    console.log(prouductList[0].name);
    
       var container =`  <tr>
          <td>${prouductList[prouductList.length -1].Name}</td>
          <td>${prouductList[prouductList.length -1].url}</td>
          <td><button class="btnn">Visit</button></td>
          <td><button class="btne">Delet</button></td>
        </tr>`
    
    document.getElementById('tbody').innerHTML+=container;
}
