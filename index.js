var katzDeli = [];

function takeANumber(katzDelieLine, newName) {
  katzDeliLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDelieLine.length} in line.`;
}