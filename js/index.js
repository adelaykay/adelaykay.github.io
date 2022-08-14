const setCategory = cat => {
  users.category = cat
  console.log('category: ', cat)
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

// this.chats
//         .where('room', '==', this.room)
//         .orderBy('created_at')
//         .onSnapshot(snapshot => {
//             snapshot.docChanges().forEach(change => {
//                 if(change.type === 'added') {
//                     //update ui

//                     // callback(change.doc.data());
//                 }
//             })
//         });

// sign user out of auth session
const logout = () => {
  auth.signOut()
  window.location.replace('./landing.html')
}
