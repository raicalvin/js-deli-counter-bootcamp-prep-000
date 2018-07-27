var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  let person = katzDeliLine.shift();
  if (person) {
    return 'Currently servering ' + katzDeliLine[person];
  }
  return 'There is nobody waiting to be served!';
}