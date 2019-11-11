//Responsive Form stuff
let form = document.getElementsByTagName("form")[0];

//When input into email field changes, collect input, add to local storage        
let email = document.getElementById("email");
        email.addEventListener("change", function(emailEvent) {
            var emailInput = document.getElementById("email").value;
            localStorage.setItem('email', emailInput);
            console.log(localStorage);
        }
        )


        let finalE = getItem('email');
        document.getElementById("finalName").appendChild(finalE);

//When input into name (first) field changes, collect input, add to local storage   
        let name1 = document.getElementById("name");
        name1.addEventListener("change", function(nameEvent) {
            var nameInput = document.getElementById("name").value;
            localStorage.setItem('name', nameInput);
            console.log(localStorage);

        }
        
        )

