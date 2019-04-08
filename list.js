    //status
    var status = 'Open';
     // make id
  function makeid() {
  
return Math.random().toString(36).substr(4, 8) + '-' + Math.random().toString(36).substr(2, 4) + '-' + Math.random().toString(36).substr(2, 4) + '-' + Math.random().toString(36).substr(2, 4) + '-' + Math.random().toString(36).substr(2, 12)  ;
};


   var addBtn = document.getElementById('add-btn');
        addBtn.addEventListener('click',function(){
        var descriptionValue = document.getElementById('description').value;
        var assignedValue = document.getElementById('assigned').value;
        var severityValue = document.getElementById('severity').value;
         
        var description = document.getElementById('description')
        var assigned = document.getElementById('assigned');
         
    
   
       if(descriptionValue ==='' || assignedValue ===''){
        
           if(descriptionValue ===''){
               description.style.borderColor = 'red';
           } 
           
           if(assignedValue ===''){
              assigned.style.borderColor = 'red';
           } 
           notifyAlert ('warning');
      
           
       } else {
           
            addIssue(status,makeid(),descriptionValue,severityValue,assignedValue);
           
           document.getElementById('description').value ='';
           document.getElementById('assigned').value ='';
           notifyAlert ('sucess');
           notifyAlert ('success');
          
            description.style.borderColor = '';
            assigned.style.borderColor = '';
      }
       
       

    });
     





displayAssig();

 function displayAssig(){
   // Get bookmarks from localStorage

 var objData = JSON.parse(localStorage.getItem('objData'));
     var list = JSON.parse(localStorage.getItem('list'));
   var pDescription = document.createElement('p');
    var issueSeverityText = document.createElement('span');
    var issueAssignedText = document.createElement('span');
     var assigInfo = document.getElementById('assig-name');
     assigInfo.innerHTML = list.name;
           
for(var i =0; i<objData.length; i++){
 
   
    var id = objData[i].id;
    var p = objData[i].descriptionValue;
    var s =objData[i].severityValue;
    var a = objData[i].assignedValue;
    var st = objData[i].status;
     var c = objData[i].color;
    pDescription.innerHTML =p;
    issueSeverityText.innerHTML =s;
    issueAssignedText.innerHTML =a;
    st.innerHTML = st;
    if(a === list.name){
        addIssue(st,id,p,s,a,c);
    }
  
    localStorage.setItem('objData', JSON.stringify(objData));
 
}

}  
 
 
 
function addIssue(st,id,p,s,a,c){
    
    
    var descriptionValue = document.getElementById('description').value;
    var assignedValue = document.getElementById('assigned').value;
    var severityValue = document.getElementById('severity').value;
    var addBtn = document.getElementById('add-btn');
    var color1 = document.getElementById('color1');
     var color2 = document.getElementById('color2');
     var color3 = document.getElementById('color3');
    
    
    
           var data = {
                id:id,
                status:st,
                descriptionValue: descriptionValue,
                severityValue:  severityValue,
                assignedValue: assignedValue, 
                color:c
                
 
        };
         
           
               var list ={ 
                name:''
                }
    
   
        
           if(localStorage.getItem('list') === null){
             localStorage.setItem('list', JSON.stringify(list));
         
         }
           if(localStorage.getItem('objData') === null){
           
            // Init array
            var objData = [];
            // Add to array
            objData.push(data);
            // Set to localStorage
            localStorage.setItem('objData', JSON.stringify(objData));
               
          } else {
            
            // Get from localStorage
            var objData = JSON.parse(localStorage.getItem('objData'));
            // Add  to array
            objData.push(data);
            // Re-set back to localStorage
             localStorage.setItem('objData', JSON.stringify(objData));
              
              
          }
  
 
        


    //CREATE ISSUE ITEM 
    var issueListBox = document.getElementById('issue-list'); 
    var issueItem = document.createElement('div');
    var IssueIdText = document.createElement('p');
    var issueID = document.createElement('span');
    var status = document.createElement('p');
    var pDescription = document.createElement('p');
    var descEdit =  document.createElement('input');
    var issueItemSA =document.createElement('div');
    var issueSeverity =document.createElement('div');
    var issueSeverityIcon = document.createElement('i');
    var issueSeverityText = document.createElement('span');
    var issueAssigned = document.createElement('div');
    var issueAssignedIcon = document.createElement('i');
    var issueAssignedText = document.createElement('span');
    var issueItemBtn = document.createElement('div');
    var closeBtn = document.createElement('div');
    var DeleteBtn = document.createElement('div');
    var editBtn = document.createElement('div');
    
      


    
    issueItem.classList = 'issue-item';
    IssueIdText.classList ='id-text';
    IssueIdText.innerHTML ='Issue ID: ';
    issueID.classList = 'issue-id';
    issueID.innerHTML = id;
    status.classList = 'status';
    status.innerHTML = st;
    pDescription.classList = 'issue-item-desc';
    pDescription.innerHTML =p;
    descEdit.classList = 'descEdit';
    descEdit.value = p;
    issueItemSA.classList = 'issue-item-sa';
    issueSeverity.classList ='issute-item-severity';
    issueSeverityIcon.classList='far fa-clock';
    issueSeverityText.innerHTML = s;
    issueAssigned.classList ='issute-item-assigned';
    issueAssignedIcon.classList ='fas fa-user';
    issueAssignedText.innerHTML =a;
    issueItemBtn.classList ='issue-item-buttons';
    closeBtn.classList = 'close-btn';
    DeleteBtn.classList = 'delete-btn';
    editBtn.classList = 'edit-btn';
    closeBtn.textContent ='Close';
    DeleteBtn.textContent = 'Delete';
    editBtn.textContent = 'Edit';
    

    
    issueItem.appendChild(IssueIdText);
    issueItem.appendChild(status);
    issueItem.appendChild(pDescription);
    issueItem.appendChild(descEdit);
    IssueIdText.appendChild(issueID);
    issueItemSA.appendChild(issueSeverity);
    issueItemSA.appendChild(issueAssigned);
    
    issueSeverity.appendChild(issueSeverityIcon);
    issueSeverity.appendChild(issueSeverityText);
    issueAssigned.appendChild(issueAssignedIcon);
    issueAssigned.appendChild(issueAssignedText);
    issueItemBtn.appendChild(closeBtn);
    issueItemBtn.appendChild(DeleteBtn);
   
    
   
    issueItem.appendChild(issueItemSA);
    issueItem.appendChild(issueItemBtn);

    issueListBox.appendChild(issueItem);
    issueListBox.insertBefore(issueItem,issueListBox.childNodes[0]);
    
     color1.addEventListener('click',function(){
        
                 for (var i in objData) {
                         if (objData[i].id === id) {
                                objData[i].color = '#27293D';
        
                                 localStorage.setItem('objData', JSON.stringify(objData));
                                break; 
                                     
                                 }

                        } 
     });
        
         
         issueAssigned.addEventListener('click',function(){
              var list = JSON.parse(localStorage.getItem('list'));
             var text = issueAssignedText.innerText ;
            
             list.name = text;
    
             localStorage.setItem('list', JSON.stringify(list));
         
             window.open('/list.html');
        });

    
    
    DeleteBtn.addEventListener('click',function (){
        //delete from storage
         var objData = JSON.parse(localStorage.getItem('objData'));
         
          for (var i in objData) {
             if (objData[i].id === id) {
                         objData.splice(i, 1);
                  localStorage.setItem('objData', JSON.stringify(objData));
                        break; 
                   } 
            }
        
        //delete from DOM
        issueItem.classList.add('hide-item');
        setTimeout(function(){
            issueListBox.removeChild(issueItem);
        },1000/3);
         notifyAlert ('delete');
     
    }); 
 
    closeBtn.addEventListener('click',function (){
         
         var objData = JSON.parse(localStorage.getItem('objData'));
         
                     for (var i in objData) {
                         if (objData[i].id === id) {
                                objData[i].status = 'Closed';
                                 localStorage.setItem('objData', JSON.stringify(objData));
                                break; 
                                     
                                 }

                        }                           
                         closeBtn.style.display = 'none';
                        status.innerHTML = 'Closed';
                        issueItem.style.backgroundColor = '#eee';
                        issueItem.style.color = 'black';
                        notifyAlert ('status');
                        DeleteBtn.style.marginLeft ='0px';
                      
                        
    });
   
       if (status.innerHTML === 'Closed' ){
                            
                         closeBtn.style.display = 'none';
                        status.innerHTML = 'Closed';
                        issueItem.style.backgroundColor = '#eee';
                         issueItem.style.color = 'black';
                        DeleteBtn.style.marginLeft ='0px';
    }
    
       if (status.innerHTML === 'Open'){
          
           var objData = JSON.parse(localStorage.getItem('objData'));
                if(c === '#FFB236'){
 
                    issueItem.style.backgroundColor = '#FFB236'; 
                    issueItem.style.opacity = '0.8';
                   issueItem.style.color = 'rgba(255,255,255,0.8)';
                    descEdit.style.color = 'rgba(255,255,255,0.9)';
                 descEdit.style.borderBottom = '1px solid white';
                } 
            if(c === '#2CA8FF'){
 
                    issueItem.style.backgroundColor = '#2CA8FF'; 
                    issueItem.style.opacity = '0.8';
                    issueItem.style.color = 'rgba(255,255,255,0.8)';
                    descEdit.style.color = 'rgba(255,255,255,0.9)';
                   
                 descEdit.style.borderBottom = '1px solid white';
                } 
             if(c === '#18CE0F'){

                    issueItem.style.backgroundColor = '#18CE0F'; 
                    issueItem.style.opacity = '0.8';
                    issueItem.style.color = 'rgba(255,255,255,0.8)';
                    descEdit.style.color = 'rgba(255,255,255,0.9)';
                  
                 descEdit.style.borderBottom = '1px solid white';
                } 
           
            if(c === '#F96332'){

                    issueItem.style.backgroundColor = '#F96332'; 
                    issueItem.style.opacity = '0.8';
                    issueItem.style.color = 'rgba(255,255,255,0.8)';
                    descEdit.style.color = 'rgba(255,255,255,0.9)';
                  
                 descEdit.style.borderBottom = '1px solid white';
                } 
           if(c === '#FF3636'){

                    issueItem.style.backgroundColor = '#FF3636'; 
                    issueItem.style.opacity = '0.8';
                    issueItem.style.color = 'rgba(255,255,255,0.8)';
                    descEdit.style.color = 'rgba(255,255,255,0.9)';
                  
                 descEdit.style.borderBottom = '1px solid white';
                } 
       }
  
    
    //edit descprition 
    
   pDescription.addEventListener('click',function(){
       pDescription.style.display = 'none';
       descEdit.style.display = 'block';
       descEdit.focus();
   });

    
    descEdit.addEventListener('keyup',function(e){
    var objData = JSON.parse(localStorage.getItem('objData'));

    if (e.keyCode === 13) {
 
        
         pDescription.style.display = 'block';
        var editValue =descEdit.value;
       
        descEdit.style.display = 'none';
            for (var i in objData) {
                         if (objData[i].id === id) {
                                 if(editValue !== ''){
                                objData[i].descriptionValue = editValue;
                                pDescription.innerHTML = editValue;
                                 localStorage.setItem('objData', JSON.stringify(objData));
                                break; 
                                   
                                 }
                                     
                                 }

                        } 

  }
        
      
        
    });
        

}

////// NOTIFY ALERT /////

function notifyAlert (notify) {
    var notifyList = document.getElementById ('notify-list');
    var warning = document.createElement ('div');
    var success = document.createElement ('div');
    var xWarning = document.createElement('i');
    var xSucess = document.createElement('i');
    var deleteCard = document.createElement ('div');
    var xdeleteCard = document.createElement('i');
    var statusNotify = document.createElement ('div');
    var xStatus = document.createElement('i');
    
    warning.classList = 'warning-notify ';
    warning.innerHTML = 'Please fill required fields';
    xWarning.classList = 'fas fa-times';
    warning.appendChild (xWarning);
    
    success.classList = 'success-notify';
    success.innerHTML = 'You added a new issue ';
     xSucess.classList = 'fas fa-times';
    success.appendChild (xSucess);
    
     deleteCard.classList = 'delete-notify';
    xdeleteCard.classList = 'fas fa-times';
    deleteCard.innerHTML = 'You deleted issue ';
    deleteCard.appendChild (xdeleteCard);
    
     statusNotify.classList = 'status-notify ';
    statusNotify.innerHTML = 'You changed status ';
    xStatus.classList = 'fas fa-times';
    statusNotify.appendChild (xStatus);
    
    if (notify === 'warning') { 
        
    notifyList.appendChild (warning);
        
    } else if (notify === 'sucess') {
        
         notifyList.appendChild (success);
    } else if (notify === 'delete') {
        
         notifyList.appendChild (deleteCard);
    } else if (notify === 'status') {
        
         notifyList.appendChild (statusNotify);
    }
    
        xWarning.addEventListener ('click', function(){
         notifyList.removeChild(warning);
    });
    
    xSucess.addEventListener ('click', function(){
        notifyList.removeChild(success);
         
    });
    
       xdeleteCard.addEventListener ('click', function(notify){
         notifyList.removeChild(deleteCard);
    });
    
         xStatus.addEventListener ('click', function(){
         notifyList.removeChild(statusNotify);
    });
    
   setTimeout(function(){notifyList.removeChild(deleteCard); },4000);
    setTimeout(function(){notifyList.removeChild(success); },4000);
    setTimeout(function(){notifyList.removeChild(warning); },4000);
      setTimeout(function(){notifyList.removeChild(statusNotify); },4000);
  

}

