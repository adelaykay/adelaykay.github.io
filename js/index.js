const setCategory = cat => {
  users.category = cat
  // console.log('category: ', cat)
  document.querySelector('.signupTitle').textContent = `${cat} Sign Up`
  if (cat == 'Student') {
    document
      .querySelectorAll('.studHide')
      .forEach(el => el.setAttribute('hidden', ''))
  } else if (cat == 'Parent') {
    document
      .querySelectorAll('.parentHide')
      .forEach(el => el.setAttribute('hidden', ''))
  } else if (cat == 'Faculty') {
    document
      .querySelectorAll('.facHide')
      .forEach(el => el.setAttribute('hidden', ''))
  }
}

// sign user out of auth session
const logout = () => {
  auth.signOut()
  window.location.replace('./index.html')
}

// Form Validation =================================================================
const confirmForm = form => {
  let patt1 = /^[a-zA-Z]{2,}$/
  if (!patt1.test(form.first_name.value)) {
    //if(!(form.first.value.match(/^[a-zA-Z]{2,}$/))) {
    alert('Invalid First Name')
    form.first_name.focus()
    return false
  } else if (!patt1.test(form.last_name.value)) {
    //if(!(form.first.value.match(/^[a-zA-Z]{2,}$/))) {
    alert('Invalid Last Name')
    form.last_name.focus()
    return false
  }

  let patt2 = /^[a-zA-Z]{4,}$/
  if (!patt2.test(form.username.value)) {
    //    if(!(form.last.value.match(/^[a-zA-Z]{2,}$/))) {
    alert('Invalid User Name')
    form.username.focus()
    return false
  }
  let patt3 = /^\w.+\@+[a-z]+\.[a-z]{2,7}$/
  if (!patt3.test(form.email.value)) {
    alert('Invalid Email')
    form.email.focus()
    return false
  }

  let patt4 = /^[1-9]{1,3}$/
  if (!patt4.test(form.age.value)) {
    //if(!(form.age.value.match(/^[1-9]{1,3}$/))){
    alert('Invalid Age')
    form.age.focus
    return false
  }

  let patt5 = /^\w{6,}$/
  if (!patt5.test(form.pword.value)) {
    //   if(!(form.pword.value.match(/^.\w{5,}$/))){
    alert('Invalid Password')
    form.password.focus()
    return false
  }

  if (!(form.confirmPassword.value == form.password.value)) {
    alert('Password must be the same')
    form.confirmPassword.focus()
    return false
  } else {
    return true
  }
}
