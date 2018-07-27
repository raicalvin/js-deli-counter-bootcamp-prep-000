var katzDeli = [];

function takeANumber(katzDeliLine, newName) {
  katzDelieLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDelieLine.length} in line.`;
}