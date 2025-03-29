const findNumbers = /\d+/g;

export function getNumberFromInstruction(instruction: string) {
  const [left, right] = instruction.match(findNumbers)!;
  return [Number(left), Number(right)];
}
