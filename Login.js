const profileContainer = document.getElementById('profileContainer');
        const progressContainer = document.getElementById('progressContainer');
        const profileCompletionMessage = document.getElementById('profileCompletionMessage');
        let step = 1;
        let profileData = {};

        function signIn() {
            profileContainer.innerHTML = `
                <fieldset>
                    <legend>Step ${step}: Basic Information</legend>
                    <label for="name">Name:</label>
                    <input type="text" id="name" required><br>
                    <label for="age">Age:</label>
                    <input type="number" id="age" required><br>
                    <button onclick="saveBasicInformation()">Save</button>
                    <button onclick="skipStep()">Skip</button>
                </fieldset>
            `;
            updateProgress();
        }

        function saveBasicInformation() {
            const name = document.getElementById('name').value;
            const age = document.getElementById('age').value;

            profileData.name = name;
            profileData.age = age;

            step++;
            if (step <= 4) {
                displayNextStep();
            } else {
                displayProfileCompletion();
            }
        }

        function logIn() {
            profileContainer.innerHTML = `
                <fieldset>
                    <legend>Login</legend>
                    <label for="username">Username:</label>
                    <input type="text" id="username" required><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" required><br>
                    <button onclick="login()">Log In</button>
                </fieldset>
            `;
        }

        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Here you can implement your login logic using the entered username and password
            // For demonstration purposes, log the credentials to the console
            console.log('Username:', username);
            console.log('Password:', password);

            // You can also redirect the user to another page or perform other actions based on the login result
        }

        function skipStep() {
            step++;
            if (step <= 4) {
                displayNextStep();
            } else {
                displayProfileCompletion();
            }
        }

        function displayNextStep() {
            switch (step) {
                case 2:
                    collectEmailAndPhone();
                    break;
                case 3:
                    collectAddress();
                    break;
                case 4:
                    collectUsernameAndPassword();
                    break;
                default:
                    break;
            }
        }

        function collectEmailAndPhone() {
            profileContainer.innerHTML = `
                <fieldset>
                    <legend>Step ${step}: Email and Phone Number</legend>
                    <label for="email">Email:</label>
                    <input type="email" id="email" required><br>
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" required><br>
                    <button onclick="saveEmailAndPhone()">Save</button>
                    <button onclick="skipStep()">Skip</button>
                </fieldset>
            `;
            updateProgress();
        }

        function saveEmailAndPhone() {
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;

            profileData.email = email;
            profileData.phone = phone;

            step++;
            if (step <= 4) {
                displayNextStep();
            } else {
                displayProfileCompletion();
            }
        }

        function collectAddress() {
            profileContainer.innerHTML = `
                <fieldset>
                    <legend>Step ${step}: Address</legend>
                    <label for="address">Address:</label>
                    <input type="text" id="address" required><br>
                    <button onclick="saveAddress()">Save</button>
                    <button onclick="skipStep()">Skip</button>
                </fieldset>
            `;
            updateProgress();
        }

        function saveAddress() {
            const address = document.getElementById('address').value;

            profileData.address = address;

            step++;
            if (step <= 4) {
                displayNextStep();
            } else {
                displayProfileCompletion();
            }
        }

        function collectUsernameAndPassword() {
            profileContainer.innerHTML = `
                <fieldset>
                    <legend>Step ${step}: Username and Password</legend>
                    <label for="username">Username:</label>
                    <input type="text" id="username" required><br>
                    <label for="password">Password:</label>
                    <input type="password" id="password" required><br>
                    <button onclick="saveUsernameAndPassword()">Save</button>
                    <button onclick="skipStep()">Skip</button>
                </fieldset>
            `;
            updateProgress();
        }

        function saveUsernameAndPassword() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            profileData.username = username;
            profileData.password = password;

            step++;
            displayProfileCompletion();
        }

        function displayProfileCompletion() {
            profileContainer.innerHTML = `
                <h2>Profile Completion</h2>
                <p>Name: ${profileData.name}</p>
                <p>Age: ${profileData.age}</p>
                <p>Email: ${profileData.email}</p>
                <p>Phone: ${profileData.phone}</p>
                <p>Address: ${profileData.address}</p>
                <p>Username: ${profileData.username}</p>
                <p>Password: ${profileData.password}</p>
                <p>Thank you for completing your profile!</p>
            `;

            updateProgress();
        }

        function updateProgress() {
            const completionPercentage = (step - 1) * 25; // Calculate completion percentage
            progressContainer.innerHTML = `Profile Completion: ${completionPercentage}%`;
            progressContainer.style.textAlign = 'center';
        }

        signIn(); // Automatically show the sign-in form when the page loads