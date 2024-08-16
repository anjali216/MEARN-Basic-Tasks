import React from 'react'

function Login() {
  return (
    <div class="d-flex justify-content-center align-items-center full-height" >
    <div class="border m-3 p-3 w-25 shadow bg-body-tertiary rounded">
    <div class="text-center">
        <h1>Login</h1>
    </div>
    <form>
        <div class="mb-3 mt-3">
         <input type="text" class="form-control w-100" id="" placeholder="Username"></input>
        </div>
        <div class="mb-3 mt-3">
         <input type="text" class="form-control w-100" id="" placeholder="Password"></input>
        </div>
        <div class="text-center">
        <button type="button" class="btn btn-primary" onclick="login()">Login</button>
        </div>
        <div class="text-center">
            <p class="mt-3">No account? <a href='#/'>Register</a></p>
        </div>
    </form>
    </div>

    </div>
  )
}

export default Login