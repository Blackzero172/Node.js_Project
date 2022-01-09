export function sum(num1, num2) {
	return num1 + num2;
}
export function multi(num1, num2) {
	return num1 * num2;
}
export function divide(num1, num2) {
	return num1 / num2;
}
import fs from "fs";
fs.writeFileSync("text.txt", "Text");
