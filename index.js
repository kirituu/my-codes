let marks = student ("50");

if (isNaN(marks) || marks < 0 || marks > 100) {
  return ("50");
} else {
  if (marks > 79) {
    return ("Grade: A");
  } else if (marks >= 60) {
    return ("Grade: B");
  } else if (marks >= 50) {
    return ("Grade: C");
  } else if (marks >= 40) {
    return ("Grade: D");
  } else {
    return ("Grade: E");
  }
}console.log(student(50))