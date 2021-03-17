const app = Vue.createApp({
    /**/
    data: function () {
        return {
            errors: [],
            txtFirstName: null,
            txtLastName: null,
            txtUserName: null,
            txtEmail: null,
            txtConfirmEmail: null,
            txtPassword: null,
            txtConfirmPassword: null,
            txtStreet: null,
            txtState: null,
            txtCity: null,
            txtZipcode: null,
            securityQuestions: null,
            securityAnswers: null,
            txtBio: null,
            options: [
                { id: 0, value: "" },
                { id: 1, value: "What was your first place of employment?" },
                { id: 2, value: "What was your schools mascot?" },
                { id: 3, value: "What is your favorite team?" },
                { id: 4, value: "What is your favorite workout?" }
            ],
            passwordRules: [
                { message: 'One lowercase letter required.', regex: /[a-z]+/ },
                { message: "One uppercase letter required.", regex: /[A-Z]+/ },
                { message: "One number required.", regex: /[0-9]+/ },
                { message: "3 characters minimum.", regex: /.{3,}/ }

            ]
        }
    },
    methods: {
        checkForm: function (e) {
            this.errors = [];

            /*First Name*/
            if (!this.txtFirstName) {
                this.errors.push("First Name required.");
                document.getElementsByName("txtFirstName")[0].style.backgroundColor = "red";
            } else if (!this.vaildText(this.txtFirstName)) {
                this.errors.push('Invalid characters in First Name.');
                document.getElementsByName("txtFirstName")[0].style.backgroundColor = "red";
            }
            /*Last Name*/
            if (!this.txtLastName) {
                this.errors.push("Last Name required.");
                document.getElementsByName("txtLastName")[0].style.backgroundColor = "red";
            } else if (!this.vaildText(this.txtLastName)) {
                this.errors.push('Invalid characters in Last Name.');
                document.getElementsByName("txtLastName")[0].style.backgroundColor = "red";
            }
            /*Username*/
            if (!this.txtUserName) {
                this.errors.push("User Name required.");
                document.getElementsByName("txtUserName")[0].style.backgroundColor = "red";
            } else if (!this.vaildText(this.txtUserName)) {
                this.errors.push('Invalid characters in User Name.');
                document.getElementsByName("txtUserName")[0].style.backgroundColor = "red";
            }
            /*Email*/
            if (!this.txtEmail) {
                this.errors.push('Email required.');
                document.getElementsByName("txtEmail")[0].style.backgroundColor = "red";
            } else if (!this.validEmail(this.txtEmail)) {
                this.errors.push('Valid email required.');
                document.getElementsByName("txtEmail")[0].style.backgroundColor = "red";
            }

            if (!this.txtConfirmEmail) {
                this.errors.push('Please confirm email address.');
                document.getElementsByName("txtConfirmEmail")[0].style.backgroundColor = "red";
            } else if (this.txtEmail != this.txtConfirmEmail) {
                this.errors.push('Email and Email Confirmation do not match');
                document.getElementsByName("txtEmail")[0].style.backgroundColor = "red";
                document.getElementsByName("txtConfirmEmail")[0].style.backgroundColor = "red";
            }
            /*Password*/
            if (!this.txtPassword) {
                this.errors.push("Password required.");
                document.getElementsByName("txtPassword")[0].style.backgroundColor = "red";
            }
            if (!this.txtConfirmPassword) {
                this.errors.push("Please confrim your password.");
                document.getElementsByName("txtConfirmPassword")[0].style.backgroundColor = "red";
            } else if (this.txtPassword != this.txtConfirmPassword) {
                this.errors.push('Password and Password confirmation do not match');
                document.getElementsByName("txtConfirmPassword")[0].style.backgroundColor = "red";
                document.getElementsByName("txtPassword")[0].style.backgroundColor = "red";
            } else {
                for (let condition of this.passwordRules) {
                    if (!condition.regex.test(this.txtPassword)) {
                        this.errors.push(condition.message);
                        document.getElementsByName("txtPassword")[0].style.backgroundColor = "red";
                    }
                }
            }
            /*Address*/
            if (!this.txtStreet) {
                this.errors.push("Street required.");
                document.getElementsByName("txtStreet")[0].style.backgroundColor = "red";
            } else if (!this.vaildText(this.txtStreet)) {
                this.errors.push('Invalid characters in Street Address.');
                document.getElementsByName("txtStreet")[0].style.backgroundColor = "red";
            }
            if (!this.txtCity) {
                this.errors.push("City required.");
                document.getElementsByName("txtCity")[0].style.backgroundColor = "red";
            } else if (!this.vaildText(this.txtCity)) {
                this.errors.push('Invalid characters in City field.');
                document.getElementsByName("txtCity")[0].style.backgroundColor = "red";
            }
            if (!this.txtState) {
                this.errors.push("State required.");
                document.getElementsByName("txtState")[0].style.backgroundColor = "red";
            } else if (!this.vaildText(this.txtState)) {
                this.errors.push('Invalid characters in State field.');
                document.getElementsByName("txtState")[0].style.backgroundColor = "red";
            }
            if (!this.txtZipcode) {
                this.errors.push("Zipcode required.");
                document.getElementsByName("txtZipcode")[0].style.backgroundColor = "red";
            } else if (!this.vaildText(this.txtZipcode)) {
                this.errors.push('Invalid characters in Zipcode field.');
                document.getElementsByName("txtZipcode")[0].style.backgroundColor = "red";
            }
            /*Bio*/
            if (!this.vaildText(this.txtBio)) {
                this.errors.push('Invalid characters in Biography field.');
                document.getElementsByName("txtBio")[0].style.backgroundColor = "red";
            }



            if (!this.errors.length) {
                return true;/*No ERRORS! WOW! SO COOL! YOUR GREAT!*/
            }

            e.preventDefault();
        },

        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },

        vaildText: function (text) {
            var re = /[A-Za-z0-9 ._^%$#!~@,-]/g;
            return re.test(text);
        }

    }

});

