//WRITE YOUR CODE BELOW
//declare the students array
const students = ["Alice", "Carol", "Tom", "John", "Lisa"];

//stor the length of students array in variable
const length = students.length;

console.log("Number of students", length);

// for loop
for (let i = 0; i < length; i++) {
  //store current student
  const currentStudent = students[i];
  //construct message and store
  const message = `Great to see you, ${currentStudent}!`;
  // console log message
  console.log(message);
}
