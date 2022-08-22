  //=============media mobile displayBox============
  let display_box = document.querySelector('.display-box');//student
  let display_box1 = document.querySelector('.display-box1');//teacher

// ============student===============
  let additional = document.querySelector('.additional');





// =================Result===============
let result = document.querySelector('.result-info');
let displayRes = document.querySelector('.result');
let closeBtn = document.querySelector('.closebtn');

displayRes.addEventListener('click', () => {
    result.style.display = 'block';
    additional.style.display = 'none';
    display_box.style.display = 'block';
    resource.style.display = 'none';
    note_table.style.display = 'none';
    studentAcad.style.display = 'none';
});

closeBtn.addEventListener('click', () => {
    result.style.display = 'none';
    additional.style.display = 'block';
    display_box.style.display = 'none';
});


//=============study resources================
let study = document.querySelector('.study-resource');
let resource = document.querySelector('.resources-info');
let closeBtn1 = document.querySelector('.closebtn1');
study.addEventListener('click', () => {
    resource.style.display = 'block';
    additional.style.display = 'none';
    display_box.style.display = 'block';
    result.style.display = 'none';
    note_table.style.display = 'none';
    studentAcad.style.display = 'none';
});
closeBtn1.addEventListener('click', () => {
    additional.style.display = 'block';
    resource.style.display = 'none';
    display_box.style.display = 'none';
});

//===============extra classes/revision==============
let notifcation = document.querySelector('.revision');
let note_table = document.querySelector('.notification-table');
let closeBtn2 = document.querySelector('.closebtn2');
notifcation.addEventListener('click', () => {
    note_table.style.display = 'block';
    additional.style.display = 'none';
    display_box.style.display = 'block';
    result.style.display = 'none';
    resource.style.display = 'none';
    studentAcad.style.display = 'none';
});
closeBtn2.addEventListener('click', () => {
    additional.style.display = 'block';
    note_table.style.display = 'none'
    display_box.style.display = 'none';
});

// ===========acad progress==========
let Acadprog = document.querySelector('.acad');
let studentAcad = document.querySelector('.student-acad');
let closebtn3 = document.querySelector('.closebtn3');
Acadprog.addEventListener('click', () => {
    result.style.display = 'none';
    studentAcad.style.display = 'block';
    display_box.style.display = 'block';
    additional.style.display = 'none';
    resource.style.display = 'none';
    note_table.style.display = 'none';
});
closebtn3.addEventListener('click', () => {
    studentAcad.style.display = 'none';
    additional.style.display = 'block'
    display_box.style.display = 'none';
});





// =========================teacher===================
let teachDis = document.querySelector('.teachDisplay');

// ===============result===================
let teacherScores = document.querySelector('.teachUpdate');
let Admin = document.querySelector('.admin-update');
let teachBtn = document.querySelector('.teachBtn');
teacherScores.addEventListener('click', () => {
    Admin.style.display = 'block';
    teachDis.style.display = 'none';
    display_box1.style.display = 'block';
    media.style.display = 'none';
    totalResult.style.display = 'none';
    teachInfo.style.display = 'none';
});
teachBtn.addEventListener('click', () => {
    Admin.style.display = 'none';
    teachDis.style.display = 'block'
    display_box1.style.display = 'none';
});


// =====================video and ebook================
let teachMedia = document.querySelector('.teachMedia');
let media = document.querySelector('.teach-resource');
let closeMedia = document.querySelector('.closeMedia');
teachMedia.addEventListener('click', () => {
    media.style.display = 'block';
    teachDis.style.display = 'none';
    display_box1.style.display = 'block';
    Admin.style.display = 'none';
    totalResult.style.display = 'none';
    teachInfo.style.display = 'none';
});
closeMedia.addEventListener('click', () => {
    media.style.display = 'none';
    teachDis.style.display = 'block'
    display_box1.style.display = 'none';
});



// ====================Acad Progress===============
let teachAcad = document.querySelector('.teach-acad');
let totalResult = document.querySelector('.totalResult');
let xAcad = document.querySelector('.xAcad');
teachAcad.addEventListener('click', () => {
    totalResult.style.display = 'block';
    teachDis.style.display = 'none';
    display_box1.style.display = 'block';
    Admin.style.display = 'none';
    media.style.display = 'none';
    teachInfo.style.display = 'none';
});
xAcad.addEventListener('click', () => {
    totalResult.style.display = 'none';
    teachDis.style.display = 'block'
    display_box1.style.display = 'none';
});




// ============extra classes=========
let revision = document.querySelector('.techRevision');
let teachInfo = document.querySelector('.teach-info');
let closeBtn4 = document.querySelector('.closebtn4');
revision.addEventListener('click', () => {
    teachInfo.style.display = 'block';
    teachDis.style.display = 'none';
    display_box1.style.display = 'block';
    totalResult.style.display = 'none';
    Admin.style.display = 'none';
    media.style.display = 'none';
});
closeBtn4.addEventListener('click', () => {
    teachInfo.style.display = 'none';
    teachDis.style.display = 'block'
    display_box1.style.display = 'none';
});







/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 



