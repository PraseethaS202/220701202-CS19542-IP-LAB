document.getElementById("registrationForm").onsubmit = function(event) {
    let isValid = true;

    // Clear previous errors
    clearErrors();
    hideSuccessMessage();

    // Validate Student Name
    let studentName = document.getElementById("student_name").value;
    if (studentName === "") {
        displayError("nameError", "Student name is required");
        isValid = false;
    }

    // Validate Roll No
    let rollno = document.getElementById("rollno").value;
    if (rollno === "") {
        displayError("rollnoError", "Roll number is required");
        isValid = false;
    }

    // Validate Gender
    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        displayError("genderError", "Gender is required");
        isValid = false;
    }

    // Validate Year
    let year = document.getElementById("year").value;
    if (year === "" || isNaN(year)) {
        displayError("yearError", "Valid year is required");
        isValid = false;
    }

    // Validate Department
    let department = document.getElementById("department").value;
    if (department === "") {
        displayError("departmentError", "Department is required");
        isValid = false;
    }

    // Validate Section
    let section = document.getElementById("section").value;
    if (section === "") {
        displayError("sectionError", "Section is required");
        isValid = false;
    }

    // Validate Mobile No
    let mobileNo = document.getElementById("mobile_no").value;
    let mobileRegex = /^[6-9]\d{9}$/;
    if (!mobileRegex.test(mobileNo)) {
        displayError("mobileError", "Valid mobile number is required");
        isValid = false;
    }

    // Validate E-Mail ID
    let email = document.getElementById("email").value;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        displayError("emailError", "Valid email address is required");
        isValid = false;
    }

    // Validate Address
    let address = document.getElementById("address").value;
    if (address === "") {
        displayError("addressError", "Address is required");
        isValid = false;
    }

    // Validate City
    let city = document.getElementById("city").value;
    if (city === "") {
        displayError("cityError", "City is required");
        isValid = false;
    }

    // Validate Country
    let country = document.getElementById("country").value;
    if (country === "") {
        displayError("countryError", "Country is required");
        isValid = false;
    }

    // Validate Pincode
    let pincode = document.getElementById("pincode").value;
    let pincodeRegex = /^\d{6}$/;
    if (!pincodeRegex.test(pincode)) {
        displayError("pincodeError", "Valid pincode is required");
        isValid = false;
    }

    if (isValid) {
        event.preventDefault();  // Prevent default form submission
        showSuccessMessage("Course registered successfully!");
        document.getElementById("registrationForm").reset();  // Reset form after success
    } else {
        event.preventDefault();  // Prevent form submission if invalid
    }
};

function displayError(elementId, message) {
    document.getElementById(elementId).textContent = message;
}

function clearErrors() {
    let errors = document.querySelectorAll('.error');
    errors.forEach(function(error) {
        error.textContent = "";
    });
}

function showSuccessMessage(message) {
    document.getElementById("successMessage").textContent = message;
}

function hideSuccessMessage() {
    document.getElementById("successMessage").textContent = "";
}
