function myFunction(a, b) {
    return a==b
  }

//  Teste Unitários
expect(myFunction(2,3)).toBe("false");
expect(myFunction(3,3)).toBe("true");
expect(myFunction(1,"1")).toBe("false");
expect(myFunction("10","10")).toBe("true");