var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing(katzDeliLine) {
  let person = katzDeliLine.shift();
  if (person) {
    return 'Currently serving ' + person + '.';
  }
  return 'There is nobody waiting to be served!';
}

function currentLine(line) {
  let lineString = 'The line is currently: ';
  for (let i = 0; i < line.length; i++) {
    lineString += (i + 1) + '. ' + line[i];
    if (line.length - 1 != i) {
      lineString += ', ';
    }
  }
  return lineString;
}