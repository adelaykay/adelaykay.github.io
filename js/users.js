class Users {
  constructor() {
    this.usersRef = db.collection('users')
    this.scoresRef = db.collection('scores')
    this.studentsRef = db.collection('students')
    this.category
  }

  toTitleCase(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  getUser(user) {
    this.usersRef.where('email', '==', user).onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        console.log(
          change.doc.data().first_name +
            ' ' +
            change.doc.data().last_name +
            ' ' +
            change.doc.id
        )
      })
    })
  }

  async addUser({
    first_name,
    last_name,
    email,
    gender,
    age,
    eduClass,
    address,
    childId,
  }) {
    const now = new Date()
    const reg_date = firebase.firestore.Timestamp.fromDate(now)

    if (this.category == 'Parent') {
      const userData = {
        first_name,
        last_name,
        email,
        gender,
        address,
        category: this.category,
        childId,
        reg_date,
      }
      console.log(userData)
      const response = await this.usersRef.add(userData)
    } else if (this.category == 'Student') {
      const userData = {
        first_name,
        last_name,
        email,
        age,
        gender,
        address,
        category: this.category,
        eduClass,
        reg_date,
      }
      console.log(userData)
      const response = await this.usersRef.add(userData)
    } else if (this.category == 'Faculty') {
      const userData = {
        first_name,
        last_name,
        email,
        gender,
        address,
        category: this.category,
        eduClass,
        reg_date,
      }
      console.log(userData)
      const response = await this.usersRef.add(userData)
    }

    if (this.category.toLowerCase() == 'student') {
      const studentData = {
        class: eduClass,
        reg_date,
        first_name,
        last_name,
      }
      this.studentsRef
        .add(studentData)
        .then(() => console.log(`studentData added`))
    }
    return this
  }
}
