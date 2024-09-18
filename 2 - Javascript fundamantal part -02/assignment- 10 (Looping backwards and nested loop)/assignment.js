'use strict'

//Looping Backwards

const aboutMe = [
  'Subhe',
  'Sadik',
  2024 - 2002,
  'Student',
  'Programmer',
  'I like to play Football',
  'Listening music is my favourite thing'
]

for(let i = aboutMe.length - 1; i >= 0; i--) {
  console.log(i, aboutMe[i]);
}

//Nested loop

for(let i = 1; i < 4; i++) {
  console.log(`---------------- ${i} Semester ----------------`)

  for(let i = 1; i <= 5; i++) {
    console.log(`Subject ${i}`);
  }
}