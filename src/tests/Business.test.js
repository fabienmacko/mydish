import sum from '../business/sum';

test("Testing the sum function", () => {

  expect(sum(1,3)).toBe(4);
  expect(sum(1,4)).toBe(5);
  expect(sum(10,30)).toBe(40);
  expect(sum(1,33)).toBe(34);
  expect(sum(12,3)).toBe(15);
  expect(sum(1,1)).toBe(2);
});