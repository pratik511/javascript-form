function validation() {
    var userval = document.myForm.username.value;
    var firstnameval = document.myForm.firstname.value;  
    var middlenameval = document.myForm.middlename.value;  
    var lastnameval = document.myForm.lastname.value;  
    var dobval = document.myForm.dob.value;  
    var genderval = document.myForm.gender.value; 
    //var checkboxval = document.getElementById("hobby").value;   
    var passval = document.myForm.pswd1.value;  
    var conpassval = document.myForm.pswd2.value; 
    var addval = document.myForm.address.value;  
 
    
 



    if(userval == "" &&  firstnameval == "" && middlenameval == "" && lastnameval == "" && dobval == "" && genderval == "" && passval == "" && conpassval == "" && addval == ""){
        document.getElementById("uname").innerHTML = "User Name must be filled out"; 
        document.getElementById("fname").innerHTML = "First Name must be filled out";  
        document.getElementById("mname").innerHTML = "Middle Name must be filled out";  
        document.getElementById("lname").innerHTML = "Last Name must be filled out"; 
        document.getElementById("dob1").innerHTML = "Date birth must be filled out"; 
        document.getElementById("gender1").innerHTML = "Gender must be filled out"; 
        //document.getElementById("hobbyid").innerHTML = "Hobby must be filled out"; 
        document.getElementById("pswd3").innerHTML = "Password must be filled out"; 
        document.getElementById("pswd4").innerHTML = "Confirm Password must be filled out"; 
        document.getElementById("address1").innerHTML = "Address must be filled out";
        return false;
    }

    else if(userval == ""){
        document.getElementById("uname").innerHTML = "User Name must be filled out";  
        return false; 
      }
    else if(firstnameval == ""){  
        document.getElementById("fname").innerHTML = "First Name must be filled out";  
        return false;  
      }else if(middlenameval == ""){
        document.getElementById("mname").innerHTML = "Middel Name must be filled out";  
        return false; 
      }else if(lastnameval == ""){
        document.getElementById("lname").innerHTML = "Last Name must be filled out";  
        return false; 
      }
      else if(dobval == ""){
        document.getElementById("dob1").innerHTML = "Date birth must be filled out";  
        return false; 
      }
      else if(genderval == ""){
        document.getElementById("gender1").innerHTML = "Gender must be filled out";  
        return false; 
      }
      else if(passval == ""){
        document.getElementById("pswd3").innerHTML = "Password must be filled out";  
        return false; 
      }
      else if(conpassval == ""){
        document.getElementById("pswd4").innerHTML = "Co-Password must be filled out";  
        return false; 
      }
      else if(addval == ""){
        document.getElementById("address1").innerHTML = "Address must be filled out";  
        return false; 
      }
  }

function username1() {
    var a = document.getElementById("username").value;
    //var b = /^[A-Za-z0-9 ]{1,30}$/;
    if (a !== "") {
        document.getElementById("user-field").classList = "success";
        document.getElementById("uname").innerHTML = "";
    } else {
        document.getElementById("user-field").classList = "fail";
        document.getElementById("uname").innerHTML = "User Name must be filled out";

    }
    var c = document.getElementById("firstname").value;
    //var b = /^[A-Za-z0-9 ]{1,30}$/;
    if (c !== "") {
        document.getElementById("f-field").classList = "success";
        document.getElementById("fname").innerHTML = "";
    } else {
        document.getElementById("f-field").classList = "fail";
        document.getElementById("fname").innerHTML = "First Name must be filled out";

    }
    var d = document.getElementById("middlename").value;
    //var b = /^[A-Za-z0-9 ]{1,30}$/;
    if (d !== "") {
        document.getElementById("m-field").classList = "success";
        document.getElementById("mname").innerHTML = "";
    } else {
        document.getElementById("m-field").classList = "fail";
        document.getElementById("mname").innerHTML = "Middel Name must be filled out";
    }

    var e = document.getElementById("lastname").value;
    //var b = /^[A-Za-z0-9 ]{1,30}$/;
    if (e !== "") {
        document.getElementById("l-field").classList = "success";
        document.getElementById("lname").innerHTML = "";
    } else {
        document.getElementById("l-field").classList = "fail";
        document.getElementById("lname").innerHTML = "Last Name must be filled out";
    }

    var f = document.getElementById("address").value;
    //var b = /^[A-Za-z0-9 ]{1,30}$/;
    if (f !== "") {
        document.getElementById("a-field").classList = "success";
        document.getElementById("address1").innerHTML = "";
    } else {
        document.getElementById("a-field").classList = "fail";
        document.getElementById("address1").innerHTML = "Address must be filled out";
    }

    var g = document.getElementById("password").value;
    //var b = /^[A-Za-z0-9 ]{1,30}$/;
    if (g !== "") {
        document.getElementById("p-field").classList = "success";
        document.getElementById("pswd3").innerHTML = "";
    } else {
        document.getElementById("p-field").classList = "fail";
        document.getElementById("pswd3").innerHTML = "Password must be filled out";
    }

    var h = document.getElementById("copassword").value;
    //var b = /^[A-Za-z0-9 ]{1,30}$/;
    if (h !== "") {
        document.getElementById("pc-field").classList = "success";
        document.getElementById("pswd4").innerHTML = "";
    } else {
        document.getElementById("pc-field").classList = "fail";
        document.getElementById("pswd4").innerHTML = "Co-Password must be filled out";
    }

    var i = document.getElementById("dob").value;
    //var b = /^[A-Za-z0-9 ]{1,30}$/;
    if (i !== "") {
        document.getElementById("d-field").classList = "success";
        document.getElementById("dob1").innerHTML = "";
    } else {
        document.getElementById("d-field").classList = "fail";
        document.getElementById("dob1").innerHTML = "Date birth must be filled out";
    }


}




// function validation() {
//     var uname = document.std1.username;
//     var fname = document.std1.fname;
//     var mname = document.std1.mname;
//     var lname = document.std1.lname;
//     var dob = document.std1.dob;
//     var gender = document.std1.gender;
//     var address = document.std1.address;
//     var pswd1 = document.std1.pswd1;
//     var pswd2 = document.std1.pswd2;
//     // var hobby = document.getElementById(hobby).value;
//     // var reading = document.std1.Reading;
//     // var writing = document.std1.Writing;
//     // var traveling = document.std1.Traveling;    

//     // console.log("name", uname);
//     // debugger;
//     if (uname.value.length == "") {
//         // debugger;
//         // alert("Username is not required");
//         // uname.focus();
//         document.getElementById("123").innerHTML = "Username is not required";
//         // console.log("unmae",uname)
//         return false;
//     }
//     else if (fname.value.length <= 0) {
//         // alert("Firstname is not required");
//         document.getElementById("fname").innerHTML = "Firstname is not required";
//         // fname.focus();
//         return false;
//     }
//     if (mname.value.length <= 0) {
//         // alert("Middelname is not required");
//         document.getElementById("mname").innerHTML = "Middelname is not required";
//         // mname.focus();
//         return false;
//     }
//     if (lname.value.length <= 0) {
//         // alert("Lastname is not required");
//         document.getElementById("lname").innerHTML = "Lastname is not required";
//         // lname.focus();
//         return false;
//     }
//     if (dob.value.length <= 0) {
//         // alert("Date is not required");
//         document.getElementById("dob").innerHTML = "Date is not required";
//         // dob.focus();
//         return false;
//     }
//     if (gender.value.length <= 0) {
//         // alert("Gender is not required");
//         document.getElementById("gender1").innerHTML = "Gender is not required";
//         // gender.focus();
//         return false;
//     }
//     if (address.value.length == "") {
//         // alert("Address is not required");
//         document.getElementById("address1").innerHTML = "Address is not required";
//         // address.focus();
//         return false;
//     }

//     // if((reading.value == "") || (writing.value = "" )|| (traveling.value = "")){
//     //     document.getElementById("hobby1").innerHTML = "hobby is not required";
//     //     return false;
//     // }

//     // var check = false;
//     // for (var i = hobby.length -1; i>=0; i--){
//     //     if(hobby[i].checked){
//     //         check = true;
//     //     }
//     // }
//     // if(check == false){
//     //     document.getElementById("hobby1").innerHTML = "hobby is not required";
//     //     return false;
//     // }


//     if (pswd1.value.length == "") {
//         // alert("Password is not required");
//         document.getElementById("pswd3").innerHTML = "Password is not required";
//         // pswd1.focus();
//         return false;
//     }
//     if (pswd2.value.length == "") {
//         // alert("Co-Password is not required");
//         document.getElementById("pswd4").innerHTML = "Co-Password is not required";
//         // pswd2.focus();
//         return false;
//     }

//     return false
// }



// function username1() {
//     var a = document.getElementById("username").value;
//     //var b = /^[A-Za-z0-9 ]{1,30}$/;
//     if (a !== "") {
//         document.getElementById("user-field").classList = "success";
//         document.getElementById("uname").innerHTML = "";
//     } else {
//         document.getElementById("user-field").classList = "fail";
//         document.getElementById("uname").innerHTML = "fail";

//     }
// }