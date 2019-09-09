const index = require("./index");

test("Trim spaces function", () => {
    expect(index.trimSpaces("Hello World")).toBe("HelloWorld");
});

test("isSubstringPresent function", () => {
    expect(index.isSubstringPresent("Hello World", "rld")).toBe(true);
});

test("toggle Case function", () => {
    expect(index.toggleCase("hELLO wORLD")).toBe("Hello World");
});

test("Reverse a atring function", () => {
    expect(index.reverseString("Hello World")).toBe("dlroW olleH");
});

test("Remove special Characters function", () => {
    expect(index.removeSpecialChars4mString("Adil &%Khanday")).toBe("Adil Khanday");
});

test("Test capitalize function", () => {
    expect(index.capitalize("hello world")).toBe("Hello World");
  });

test("Equal ignore Case function", () => {
    expect(index.equalIgnoreCase("hello", "HELLO")).toBe(true);
});