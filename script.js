//your JS code here. If required.
const student = {
  name: "John Doe"
};

// Adding a getKeys() method to the Object prototype
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Calling the getKeys() method on the student object
console.log(student.getKeys()); // Output: ["name"]