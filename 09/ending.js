//Basic Algorithm Scripting: Confirm the Ending

function confirmEnding(string, target) {
  return (string.substr(-target.length) === target) ? true : false;
}
confirmEnding('Bastian', 'n');