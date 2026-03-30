$(document).ready(function(){

    //Fullname
    $("#fName").on("keyup blur", function(){
        const fullName = $(this).val().trim();
        const fullName_pattern =  /^[A-Za-z\s]{3,}$/;

        if(!fullName_pattern.test(fullName)){
            $("#fName_error").text("Your name should be at least 3 characters long, using only letters and spaces.");
            $(this).css({
                "border": "1px solid red",
                "outline": "1px solid red"
            });
        }else{
            $("#fName_error").text("");
            $(this).css({
                "border": "1px solid green",
                "outline": "1px solid green"
            });

        }
    });

    //Email Address
    $("#email").on("keyup blur", function(){
        const email = $(this).val().trim();
        const email_pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if(!email_pattern.test(email)){
            $("#email_error").text("Please enter a valid email address (e.g., name@example.com).");
            $(this).css({
                "border": "1px solid red",
                "outline": "1px solid red"
            });
        }else{
            $("#email_error").text("");
            $(this).css({
                "border": "1px solid green",
                "outline": "1px solid green"
            });
        }
    });

    //Password
    $("#password").on("keyup blur", function(){
        const password = $(this).val();
        const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        if(!password_pattern.test(password)){
            $("#password_error").text("Please create a password with at least 8 characters, including uppercase, lowercase, and a number.");
            $(this).css({
                "border": "1px solid red",
                "outline": "1px solid red"
            });
        }else{
            $("#password_error").text("");
            $(this).css({
                "border": "1px solid green",
                "outline": "1px solid green"
            });
        }
    });

    //Confirm Password
    $("#conPassword").on("keyup blur", function(){
        const confirmPassword = $(this).val();
        const password = $("#password").val();
        if(confirmPassword !== password){
            $("#cPassword_error").text("Please make sure this matches the password above.");
            $(this).css({
                "border": "1px solid red",
                "outline": "1px solid red"
            });
        }else{
            $("#cPassword_error").text("");
            $(this).css({
                "border": "1px solid green",
                "outline": "1px solid green"
            });
        }
    });

    //NIC
    $("#nic").on("keyup blur", function(){
        const nic = $(this).val().trim();
        const nic_pattern = /^(\d{9}[VvXx]|\d{12})$/;
        if(!nic_pattern.test(nic)){
            $("#nic_error").text("Please enter a valid NIC (either old or new format).");
            $(this).css({
                "border": "1px solid red",
                "outline": "1px solid red"
            });
        }else{
            $("#nic_error").text("");
            $(this).css({
                "border": "1px solid green",
                "outline": "1px solid green"             
            });
        }
    });

    //Phone Number
    $("#pNumber").on("keyup blur", function(){
        const phoneNumber = $(this).val().trim();
        const pNumber_pattern = /^0\d{9}$/;
        if(!pNumber_pattern.test(phoneNumber)){
            $("#pNumber_error").text("Please enter a 10-digit phone number (e.g., 0712345678).");
            $(this).css({
                "border": "1px solid red",
                "outline": "1px solid red"
            });
        }else{
            $("#pNumber_error").text("");
            $(this).css({
                "border": "1px solid green",
                "outline": "1px solid green"
            });
        }
    });

    //Date of Birth
    $("#birthday").on("blur", function(){
        const birthday = $(this).val();
        if(!birthday){
            $("#birthday_error").text("Please select your date of birth.");
            $(this).css({
                "border": "1px solid red",
                "outline": "1px solid red"
            });
        }else{
            let age = new Date().getFullYear() - new Date(birthday).getFullYear();
            
            //If birthday hasn't passed in this year
            const months = new Date().getMonth() - new Date(birthday).getMonth();
            if(months < 0 || (months === 0 && new Date().getDate() < new Date(birthday).getDate())){
                age--;
            }

            if(age < 18){
                $("#birthday_error").text("You need to be at least 18 years old to register.");
                $(this).css({
                    "border": "1px solid red",
                    "outline": "1px solid red"
                });
            }else{
                $("#birthday_error").text("");
                $(this).css({
                    "border": "1px solid green",
                    "outline": "1px solid green"
                });
            }
        }
    });

    //Gender
    $('input[name = "gender"]').on("change", function(){
        const gender = $('input[name = "gender"]:checked').val();
        if(!gender){
            $("#gender_error").text("Please select your gender to continue.");
        }else{
            $("#gender_error").text("");
        }
    });

    //Agreement
    $("#agree").on("change", function(){
        if(!$(this).is(":checked")){
            $("#agreement_error").text("Please check the box to agree to the registration policies.");
        }else{
            $("#agreement_error").text("");
        }
    });

    //If Valid
    $("#form").on("submit", function(event){
        event.preventDefault();

        //Gender
        const gender = $('input[name = "gender"]:checked').val();
        if(!gender){
            $("#gender_error").text("Please select your gender to continue.");
        }else{
            $("#gender_error").text("");
        }

        //Agreement
        if(!$("#agree").is(":checked")){
            $("#agreement_error").text("Please check the box to agree to the registration policies.");
        }else{
            $("#agreement_error").text("");
        }
        

        //Check for error messages
        if($(".error").filter(function(){ return $(this).text() !== "";}).length === 0){
            $("#success_message").text("Registered Successfully!");
            $("#form")[0].reset();
            $("input").css({
                "border": "",
                "outline": ""
            });
        }else{
            $("#success_message").text("");
            alert("Please fix errors before submitting.")
        }
    })
});