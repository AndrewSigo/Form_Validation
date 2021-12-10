/* functions to target all classes 
and id */
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

// stored classes and id in variables 
let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),
    errorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");

 // target form and add submit event listener
 form.addEventListener("submit", (e) => {
     e.preventDefault();

     engine(username, 0, "Username cannot be blank");
     engine(email, 1, "Email cannot be blank");
     engine(password, 2, "Password cannot be blank");
 });

 // function will do form validations, will have 3 arguments

/* id will target id, serial will target classes, message will 
print a message inside .error class */ 
 let engine = (id, serial, message) => {
     if (id.value.trim() === "") { // id.value.trim() will remove whitespace from the user input value
        errorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        // icons
        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0";
     }

     else {
        errorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        //icons
        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
     }
 };


