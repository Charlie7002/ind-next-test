import { sum } from "./sum";

it("should sum two numbers", () => {
	const result = sum(1, 2);
	expect(result).toBe(3);
});
