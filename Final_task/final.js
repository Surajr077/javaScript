let employees = [];
let currentDepartment = "All";
let currentSearch = "";

function fetchEmployees() {
    showMessage("Loading employees...");

    fetch("https://dummyjson.com/users")
        .then(response => {
            if (!response.ok) {
                throw new Error("API request failed");
            }
            return response.json();
        })

        .then(data => {
            const { users } = data;

            employees = users.map(user => {
                const {
                    id,
                    firstName,
                    lastName,
                    age,
                    email,
                    phone,
                    image,
                    company
                } = user;


                let department = company.department;

                if (department.toLowerCase().includes("engineer")) {
                    department = "IT";
                }
                else if (department.toLowerCase().includes("hr") || department.toLowerCase().includes("human")){
                    department = "HR";
                }
                else if (department.toLowerCase().includes("finance")){
                    department = "Finance";
                }
                else if (department.toLowerCase().includes("marketing")){
                    department = "Marketing";
                }
                else{
                    department = "IT";
                }


                let salary = 40000;

                if (department === "IT") {
                    salary = 55000;
                }
                else if (department === "HR") {
                    salary = 45000;
                }
                else if (department === "Finance") {
                    salary = 60000;
                }
                else if (department === "Marketing") {
                    salary = 50000;
                }
                return {
                    id: id,
                    name: firstName + " " + lastName,
                    age: age,
                    email: email,
                    phone: phone,
                    department: department,
                    image: image,
                    salary: salary
                };
            });

            displayEmployees();
            showMessage("Employee data loaded successfully.");
        })

        .catch(error => {
            console.log(error);
            showMessage(
                "Unable to load employee data. Please try again."
            );
        })

        .finally(() => {
            console.log("API request completed.");
        });
}


function displayEmployees() {
    const container = document.getElementById("employeeContainer");

    container.innerHTML = "";

    let filteredEmployees = employees;


    if (currentSearch !== "") {
        filteredEmployees = filteredEmployees.filter(employee =>
                employee.name .toLowerCase() .includes(currentSearch.toLowerCase())
            );
    }

    if (currentDepartment !== "All") {
        filteredEmployees = filteredEmployees.filter(employee =>
                employee.department === currentDepartment
            );
    }


    if (filteredEmployees.length === 0) {
        container.innerHTML = `
            <div class="no-employees">
                No employees found.
            </div>
        `;
    }



    filteredEmployees.forEach(employee => {

        const card = document.createElement("div");
        card.className = "employee-card";


        card.innerHTML = `
            <img src="${employee.image}" alt="${employee.name}">
            <h3>${employee.name}</h3>

            <p>
                <strong>Age:</strong>
                ${employee.age}
            </p>

            <p>
                <strong>Email:</strong>
                ${employee.email}
            </p>

            <p>
                <strong>Phone:</strong>
                ${employee.phone || "Not available"}
            </p>

            <p>
                <strong>Department:</strong>
                <span class="department">
                    ${employee.department}
                </span>
            </p>

            <p>
                <strong>Salary:</strong>
                ₹${employee.salary.toLocaleString("en-IN")}
            </p>

            <button
                class="delete-btn"
                data-id="${employee.id}">
                Delete
            </button>
        `;


        card.setAttribute(
            "data-employee-id",
            employee.id
        );

        const deleteButton =
            card.querySelector(".delete-btn");


        deleteButton.addEventListener(
            "click",
            function () {
                deleteEmployee(employee.id);
            }
        );

        container.appendChild(card);
    });


    updateEmployeeCount(filteredEmployees);
    calculateSalary(filteredEmployees);
    calculateHighestSalary(filteredEmployees);
}


function searchEmployees() {
    const searchInput = document.getElementById("searchInput");
    currentSearch = searchInput.value.trim();
    displayEmployees();
}


function filterDepartment(department) {
    currentDepartment = department;
    displayEmployees();
}


function updateEmployeeCount(list) {
    document.getElementById("employeeCount").innerText = list.length;
}


function calculateSalary(list) {

    const totalSalary = list.reduce(
        (sum, employee) => {
            return sum + employee.salary;
        },0
    );


    let averageSalary = 0;

    if (list.length > 0) {
        averageSalary = totalSalary / list.length;
    }

    document.getElementById("totalSalary").innerText = "₹" + totalSalary.toLocaleString("en-IN");
    document.getElementById("averageSalary").innerText ="₹" + Math.round(averageSalary).toLocaleString("en-IN");
}


function calculateHighestSalary(list) {
    const highestEmployee =document.getElementById("highestEmployee");

    if (list.length === 0) {
        highestEmployee.innerText = "-";
        return;
    }

    const highest = list.reduce(
        (employee1, employee2) => {

            if (employee1.salary > employee2.salary) {
                return employee1;
            }
            return employee2;
        }
    );

    highestEmployee.innerText = highest.name + " - ₹" + highest.salary.toLocaleString("en-IN");
}


function addEmployee(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const email = document.getElementById("email").value.trim();
    const department = document.getElementById("department").value;
    const salary =
        Number(
            document.getElementById("salary").value
        );


    const employee = {
        id: Date.now(),
        name: name,
        age: age,
        email: email,
        department: department,
        salary: salary,
        phone: "Not available",
        image: "https://dummyjson.com/icon/1/128"
    };


    if (!validateEmployee(employee)) {
        return;
    }


    employees = [
        ...employees,
        employee
    ];


    displayEmployees();
    clearForm();

    document.getElementById("errorMessage").innerText =
        "Employee added successfully.";

}



function validateEmployee(employee) {
    const error =
        document.getElementById("errorMessage");
    error.innerText = "";

    const emailExists =
        employees.some(existingEmployee =>
            existingEmployee.email.toLowerCase() === employee.email.toLowerCase()
        );


    if (employee.name === "") {
        error.innerText = "❌ Please enter employee name";
        return false;
    }

    if (employee.age <= 18) {
        error.innerText = "❌ Age must be greater than 18";
        return false;
    }


    if (employee.email === "") {
        error.innerText = "❌ Please enter employee email";
        return false;
    }


    if (emailExists) {
        error.innerText = "❌ Email already exists";
        return false;
    }


    if (employee.department === "") {
        error.innerText = "❌ Please select department";
        return false;
    }


    if (employee.salary <= 0) {
        error.innerText = "❌ Please enter valid salary";
        return false;
    }

    return true;
}


function deleteEmployee(id) {

    const employee =
        employees.find(employee =>
            employee.id === id
        );


    if (employee) {

        console.log(
            "Deleting employee:",
            employee.name
        );


        employees =
            employees.filter(employee =>
                employee.id !== id
            );
        displayEmployees();
    }
}


function sortEmployees(type) {
    if (type === "nameAsc") {
        employees.sort((a, b) =>
            a.name.localeCompare(b.name)
        );
    }
    else if (type === "nameDesc") {
        employees.sort((a, b) =>
            b.name.localeCompare(a.name)
        );
    }
    else if (type === "ageAsc") {
        employees.sort((a, b) =>
            a.age - b.age
        );
    }
    else if (type === "ageDesc") {
        employees.sort((a, b) =>
            b.age - a.age
        );
    }
    else if (type === "salaryAsc") {
        employees.sort((a, b) =>
            a.salary - b.salary
        );
    }

    else if (type === "salaryDesc") {
        employees.sort((a, b) =>
            b.salary - a.salary
        );
    }
    displayEmployees();
}




function clearForm() {

    document
        .getElementById("employeeForm")
        .reset();
}



function showMessage(text) {
    document.getElementById("message").innerText =
        text;
}



function updateDateTime() {
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString(
            "en-IN",
            {
                month: "long"
            }
        );


    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes =String(now.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    document.getElementById("today").innerText =
        `Today: ${day} ${month} ${year}`;

    document.getElementById("time").innerText =
        `Time: ${hours}:${minutes} ${ampm}`;
}


function checkEmployees() {

    const hasITEmployee =
        employees.some(employee =>
            employee.department === "IT"
        );


    const allAdults =
        employees.every(employee =>
            employee.age > 18
        );


    console.log("Has IT employee:", hasITEmployee);
    console.log("All employees are above 18:", allAdults);
}


document
    .getElementById("searchBtn")
    .addEventListener("click", searchEmployees);

document
    .getElementById("searchInput")
    .addEventListener("keyup",searchEmployees);

document
    .querySelectorAll(".department-btn")
    .forEach(button => {

        button.addEventListener(
            "click",
            function () {

                document
                    .querySelectorAll(".department-btn")
                    .forEach(btn => {
                        btn.classList.remove(
                            "active"
                        );
                    });

                this.classList.add("active");

                const department = this.getAttribute("data-department");

                filterDepartment(
                    department
                );

            }
        );

    });


document
    .getElementById("employeeForm")
    .addEventListener("submit",addEmployee);

document
    .getElementById("sortSelect")
    .addEventListener("change",
        function () {
            sortEmployees(
                this.value
            );

        }
    );

updateDateTime();

setInterval(updateDateTime,1000);
setTimeout(fetchEmployees,500);

























