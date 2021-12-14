import React from 'react'

export default function RegistrationForm() {
    return (
        <>

<form action="action_page.php">
<section className="loginsec"/>
    <div className="col-12 col-lg-6 right-side d-flex justify-content-center flex-column align-items-start">
  <div class="container">
    <h1>Registration Form</h1>
    <p>Please fill in this form to create an account.</p>
    <hr/>

    <label for="firstname"><b>First Name</b></label>
    <input type="text" placeholder="Enter First Name" name="first" id="fst" required/>

    <label for="lastname"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last Name" name="last" id="lst" required/>

    <label for="mobilenumber"><b>Mobile Number</b></label>
    <input type="text" placeholder="Enter Mobile Number" name="mobile" id="mobil" required/>

    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" id="psw" required/>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required/>
    <hr/>

    <div class="center">
 <h1 id="captchaHeading">Captcha</h1>
 <div id="captchaBackground">
 <canvas id="captcha">captcha text</canvas>
 <input id="textBox" type="text" name="text"/>
 <div id="buttons">
 <input id="submitButton" type="submit"/>
 <button id="refreshButton" type="submit">Refresh</button>
 </div>
 <span id="output"></span>
 </div>
 </div>

    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
    <button type="submit" class="registerbtn">Register</button>
  </div>

  <div class="container signin">
    <p>Already have an account? <a href="#">Login Here</a>.</p>
  </div></div>
</form>
<section/>


        </>
    )
}
