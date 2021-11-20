var studentsArray = [];

function init() {
    document.getElementById("tablerows").innerHTML = "";
    if (localStorage.studentsRecord) {
        studentsArray = JSON.parse(localStorage.studentsRecord);
        for (var i = 0; i < studentsArray.length; i++) {
            prepareTableCell(i,studentsArray[i].username, studentsArray[i].firstname, studentsArray[i].middlename, studentsArray[i].lastname, studentsArray[i].dob, studentsArray[i].gender, studentsArray[i].hobby,studentsArray[i].password, studentsArray[i].address,);
        }
    }
}
// console.log("hello");
function onRegisterPressed() {
    // console.log('123');



    var userName = document.getElementById("username").value;
    if(userName !== userName){
        userName = document.getElementById("username").value;
    }
    var firstName = document.getElementById("firstname").value;
    var middleName = document.getElementById("middlename").value;
    var lastName = document.getElementById("lastname").value;
    var dob = document.getElementById("dob").value;
    // var gender = document.getElementById("gender").value;
    var Gender = document.querySelector('input[name="gender"]:checked');
    var storeGender=Gender.value;
    // console.log('gender123', storeGender);
    // var hobby = document.getElementById("hobby").value;
    const reading = form1.Reading.checked;
    const writing = form1.Writing.checked;
    const traveling = form1.Traveling.checked;
    var hobby = []
    // console.log('Reading', reading);
    // console.log('Writing', writing);
    // console.log('Traveling', traveling);
    if (reading || writing || traveling) {
        if (reading) {
            hobby.push("Reading")
        } else {
            const index = hobby.findIndex(value => value === "Reading")
            if (index) {
                delete hobby[index]
            }
        }
        if (writing) {
            hobby.push("Writing")
        } else {
            const index = hobby.findIndex(value => value === "Writing")
            if (index) {
                delete hobby[index]
            }
        }
        if (traveling) {
            hobby.push("Traveling")
        } else {
            const index = hobby.findIndex(value => value === "Traveling")
            if (index) {
                delete hobby[index]
            }
        }
    }
    
    var password1 = document.getElementById("password").value;
    var copassword2 = document.getElementById("copassword").value;
    if (password1 != copassword2 || password1== ""){
        alert("Passwords Do Not Match");
        return ;
    }
    else{
        var password = document.getElementById("password").value;
    }


    
 
    var address = document.getElementById("address").value;

    var stuObj = {username:userName, firstname: firstName, middlename: middleName, lastname: lastName, dob: dob, gender: storeGender ,hobby: hobby,address:address,password:password}

    if (selectedIndex === -1) {
        studentsArray.push(stuObj);
    } else {
        studentsArray.splice(selectedIndex, 1, stuObj);
    }

    // console.log(studentsArray);
    localStorage.studentsRecord = JSON.stringify(studentsArray);
    // prepareTableCell(firstName,lastName);
    init();
    // onClearPressed();
    // document.getElementById("firstname").value='';
    // document.getElementById("lastname").value='';
}


function prepareTableCell(index,userName,firstName, middleName, lastName, dob, storeGender, hobby,address,password) {
    // console.log("index",index);
    // console.log('firstName',firstName);
    // console.log('middleName',middleName);
    // console.log('lastName',lastName);
    // console.log('dob',dob);
    // console.log('gender',storeGender);
    // console.log('hobby',hobby);
    // console.log('address',address);
    var table = document.getElementById("tablerows");
    var row = table.insertRow();
    var userNameCell = row.insertCell(0);
    var firstNameCell = row.insertCell(1);
    var middleNameCell = row.insertCell(2);
    var lastNameCell = row.insertCell(3);
    var dobCell = row.insertCell(4);
    var genderCell = row.insertCell(5);
    var hobbyCell = row.insertCell(6);
    var addressCell = row.insertCell(7);
    var passwordCell = row.insertCell(8);
    var actionCell = row.insertCell(9);

    userNameCell.innerHTML = userName;
    firstNameCell.innerHTML = firstName;
    middleNameCell.innerHTML = middleName;
    lastNameCell.innerHTML = lastName;
    dobCell.innerHTML = dob;
    genderCell.innerHTML = storeGender;
    hobbyCell.innerHTML = hobby;
    passwordCell.innerHTML = password;
    addressCell.innerHTML = address;
    actionCell.innerHTML = '<button onClick="onEditTableRow(' + index + ')">Edit</button> <br><br> <button onClick="deleteTableRow(' + index + ')">Delete</button>';
}

function deleteTableRow(index) {
    // var table = document.getElementById("redtable");
    // table.deleteRow(index+1);
    studentsArray.splice(index, 1);
    localStorage.studentsRecord = JSON.stringify(studentsArray);
    init();
}

function onClearPressed() {
    selectedIndex = -1;
    document.getElementById("username").value = '';
    document.getElementById("firstname").value = '';
    document.getElementById("middlename").value = '';
    document.getElementById("lastname").value = '';
    document.getElementById("dob").value = '';
    document.getElementById("gender").value = '';
    document.getElementById("hobby").value = '';
    document.getElementById("password").value = '';
    document.getElementById("copassword").value = '';
    document.getElementById("address").value = '';
    document.getElementById("submit").innerHTML = "submit";
}

var selectedIndex = -1;
function onEditTableRow(index) {
    selectedIndex = index;

    var stuObj = studentsArray[index];
    document.getElementById("firstname").value = stuObj.firstname;
    document.getElementById("middlename").value = stuObj.middlename;
    document.getElementById("lastname").value = stuObj.lastname;
    document.getElementById("dob").value = stuObj.dob;
    // document.getElementById("gender").value = stuObj.gender;
    document.querySelector('input[name="gender"]:checked') = stuObj.gender;
    document.getElementById("hobby") = stuObj.hobby;
    document.getElementById("address").value = stuObj.address;

    document.getElementById("submit").innerHTML = "Update";
}



// const submit = document.querySelector('#submit');

// submit.onclick = function() {
//     const rbs = document.querySelectorAll('input[name="gender"]');
//     let selectedValue;
//     for (const rb of rbs){
//         if (rb.checked){
//             selectedValue = rb.value;
//             console.log(selectedValue);
//             break;
//         }
//     }
// // alert(selectedValue);
// };


function relod(){
    location.reload();
}



function Delete() {
    localStorage.clear();
    // document.getElementById("subid").innerHTML = "submit";
    location.reload();
}

// function matchPassword(){
//     var pw1 = document.getElementById('password');
//     var pw2 = document.getElementById('copassword');
//     if(pw1 != pw2){
//         alert("Password did not match");
//     }
//     else{
//         alert("Password created Successfully");
//     }
// }





// function back(){
//     location.reload();
// }
// // function onpage(){
// //     location.reload();  
// // }

// function Login(){
//     const hash = Object.fromEntries(a.map(e => [e.name , e.password]))

//     var userName = document.getElementById("username").value;
//     var password = document.getElementById("password").value;

//     for(let key of hash){
//         if (key[0] === userName && key[1] === password) {
//             alert('successful');
//         } else {
//             alert('fail');
//         }
//     }

// }

// function store(){
//     var Username = document.getElementById("uname");
//     var Password = document.getElementById("pwd");
//     console.log('Username',Username);
//     localStorage.setItem("username",Username.value);
//     localStorage.setItem("password",Password.value);
// };

// function login(){
//     var Username = localStorage.getItem("username");
//     var Password = localStorage.getItem("password");

//     if (username != "undefined" || username != "null" || password != "undefined" || password !="null"){
//        document.getElementByID('welcomeMessage').innerHTML = "Welcome " + username + "!";
//        } else{
//         document.getElementById('welcomeMessage').innerHTML = "Hello!";
//         }
// }




function check() {
    
    var userName = document.getElementById('uname').value;
    var userPw = document.getElementById('pwd').value;
    console.log(userName);
    console.log(userPw);
    //alert(userName);

   
    var entriesJSON = localStorage.getItem('studentsRecord');
    var allEntries = JSON.parse(entriesJSON);
    console.log("allEntries",allEntries);

    for (var i = 0; i < allEntries.length; i++) {
        
        var entry = allEntries[i];

        var storedUserName = entry.username;
        var storedPassWord = entry.password;
        // alert(storedUserName);
        console.log("storedUserName",storedUserName);
        console.log("storedPassWord",storedPassWord);
        
        if (userName == storedUserName && userPw == storedPassWord) {
           
           alert(`Successfully logged in! ${storedUserName}`);
        //    document.write(`Successfully logged in! ${sto redUserName}`);
           

        //    document.getElementById("viewuser").innerText = 'Successfully logged in!';
            return;
    }
    
    
}
alert('Invalid Username or Password! Please try again.');
}

// function user(){
    
//     if(username !== username){
//         username = document.getElementById("username");
//     }
    
//     // while (true) {
//     //     var username = document.getElementById("username").value;

//     // }
// }