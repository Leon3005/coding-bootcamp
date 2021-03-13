//WRITE YOUR CODE BELOW
//declare the students array
const students = ["Alice", "Carol", "Tom", "John", "Lisa"];

//stor the length of students array in variable
const length = students.length;

console.log("Number of students", length);

let i = 0;

//while loop
while (i < length) {
  //get current student
  const currentStudent = students[i];
  //construct message
  const message = `Great to see you ${}`;
  //log message
  console.log(message);

  i = i + 1;
}