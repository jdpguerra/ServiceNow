//EX1
function myFunction(a, b) {
    return a==b
  }

//  Teste Unitários
expect(myFunction(2,3)).toBe("false");
expect(myFunction(3,3)).toBe("true");
expect(myFunction(1,"1")).toBe("false");
expect(myFunction("10","10")).toBe("true");

//EX2
function myFunction(a) {
    return typeof a;
  }

//  Teste Unitários
expect(myFunction(1)).toBe("number");
expect(myFunction(false)).toBe("boolean");
expect(myFunction({})).toBe("object");
expect(myFunction("Hello World")).toBe("string");
expect(myFunction(["Hello World"])).toBe("object");

//EX3
function myFunction(a, b, c, d, e, f) {
    return (((a + b) - c) * d / e) ** f
}

//  Teste Unitários
expect(myFunction(6, 5, 4, 3, 2, 1)).toBe(10.5);
expect(myFunction(6, 2, 1, 4, 2, 3)).toBe(2744);
expect(myFunction(2, 3, 6, 4, 2, 3)).toBe(-8);

//EX4
function myFunction(text, flag = "start") {
  if (text.length < 3) return text;
  return flag === "start" ? text.slice(0, 3) : text.slice(-3);
}

//  Teste Unitários
expect(myFunction("abcdefg", "start")).toBe("abc");
expect(myFunction("abcdefg", "end")).toBe("efg");
expect(myFunction("ab", "end")).toBe("ab");
expect(myFunction("abcdefg")).toBe("abc");

//EX5
function myFunction(fullname, flag = "") {
  const parts = fullname.split(" ");
  if (parts.length < 2) return fullname;
  return flag === "firstname" ? parts[0] : flag === "lastname" ? parts.reduce((prev, cur, index) => {
      return index > 0 ? prev + " " + cur : ""
  }, "").trim() : fullname;
}

//  Teste Unitários
expect(myFunction("John Williams Smith", "firstname")).toBe("John");
expect(myFunction("John Williams Smith", "lastname")).toBe("Williams Smith");
expect(myFunction("John Williams Smith")).toBe("John Williams Smith");
expect(myFunction("John", "lastname")).toBe("John");

//EX6
function myFunction(num) {
  return num % 2 === 0
}

//  Teste Unitários
expect(myFunction(8)).toBe("true");
expect(myFunction(-10)).toBe("true");
expect(myFunction(7)).toBe("false");
expect(myFunction(-41)).toBe("false");

//EX7
function myFunction(a, b) {
  return b.toLowerCase().split(a).length - 1;
}

//  Teste Unitários
expect(myFunction("a", "Quantas vezes o valor de 'a' ocorre aqui?")).toBe(5);
expect(myFunction("as", "Quantas vezes o valor de 'a' ocorre aqui?")).toBe(1);
expect(myFunction("q", "Quantas vezes o valor de 'a' ocorre aqui?")).toBe(2);
