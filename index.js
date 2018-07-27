var katzDeli = [];

function takeANumber(katzDelieLine, newName) {
  katzDelieLine.push(newName);
  return `Welcome, ${newName}. You are number ${katzDelieLine.length} in line.`;
}