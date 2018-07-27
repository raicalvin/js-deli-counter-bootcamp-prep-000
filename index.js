var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  let person = katzDeliLine.unshift();
  if (person) {
    return person;
  }
  
  return 'There is nobody waiting to be served!'
}