function myFunction(a, b) {
    return a==b
  }

//  Teste Unitários
expect(myFunction(2,3)).toBe("false");
expect(myFunction(3,3)).toBe("true");
expect(myFunction(1,"1")).toBe("false");
expect(myFunction("10","10")).toBe("true");

function myFunction(a) {
    return typeof a;
  }

//  Teste Unitários
expect(myFunction(1)).toBe("number");
expect(myFunction(false)).toBe("boolean");
expect(myFunction({})).toBe("object");
expect(myFunction("Hello World")).toBe("string");
expect(myFunction(["Hello World"])).toBe("object");

function myFunction(a, b, c, d, e, f) {
    return (((a + b) - c) * d / e) ** f
}

//  Teste Unitários
expect(myFunction(6, 5, 4, 3, 2, 1)).toBe(10.5);
expect(myFunction(6, 2, 1, 4, 2, 3)).toBe(2744);
expect(myFunction(2, 3, 6, 4, 2, 3)).toBe(-8);