import React from 'react'

export default function LoginForm() {
    return (
        <>

<form action="action_page.php" method="post">
    <section className="loginsec"/>
    <div className="row">
    <div className="col-12 col-lg-6">
<div class="imgcontainer">
  </div>
  
  <div class="container">
  <h1>Login Form</h1>
  <p>Please fill in this form to login.</p>
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
  </div>

  <div class="container">
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password</a></span>
  </div></div></div>
</form>
<section/>

        </>
    )
}
