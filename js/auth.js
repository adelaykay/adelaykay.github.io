//users class instance
const users = new Users()

// subscription to auth changes
// auth.onAuthStateChanged(user => {
//   if (user) {
//     window.location.href('./index.html')
//   }
// })

// Sign up
const signupForm = document.querySelector('#signup')

signupForm.addEventListener('submit', e => {
  // prevent default behaviour of form submit event
  e.preventDefault()
  console.log('submitting...')

  const data = new FormData(e.target)
  const userDetails = {}

  for (const [name, value] of data) {
    userDetails[name] = value
  }

  users.addUser(userDetails)
  const modal = document.querySelector('[data-modal]')
  // pick values from form fields
  const email = signupForm.email.value
  const password = signupForm.password.value

  // authenticate user with email and password
  auth
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      // Recieve sign in response
      let user = cred.user
      console.log(user)
      //Confirmation mail
      // user.sendEmailConfirmation()

      // Save user data to database
      // users.addUser(userDetails)

      signupForm.reset()

      users.getUser(user.email)
      if (user) {
        window.location.replace('./dashboard.html')
      }
    })
    .catch(error => {
      alert(error.message)
    })
})

// sign user in
const loginForm =
  document.querySelector('#loginForm') && document.querySelector('#loginForm')
loginForm.addEventListener('submit', e => {
  e.preventDefault()
  const email = loginForm.loginEmail.value
  const password = loginForm.loginPassword.value

  auth
    .signInWithEmailAndPassword(email, password)
    .then(cred => {
      if (cred.user) {
        window.location.replace('./dashboard.html')
      }
    })
    .catch(err => {
      console.log(err.message)
    })
})
