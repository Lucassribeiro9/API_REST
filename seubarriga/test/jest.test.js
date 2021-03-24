test('Devo conhecer as principais assertivas do jest', () => {
  let number = null; 
  expect(number).toBeNull();
  number = 10; 
  expect(number).not.toBeNull(); // para negar 
  expect(number).toBe(10); // para tipos primitivos, tanto o toBe quanto o toEqual são iguais
  expect(number).toEqual(10);
  expect(number).toBeGreaterThan(9); // maior
  expect(number).toBeLessThan(11); // menor. São para quando não tiver certeza do valor que virá
});

test('Devo saber trabalhar com objetos', () =>{
  const obj = { name: 'John', mail: 'john@mail.com'};
  expect(obj).toHaveProperty('name'); // verifica se possui a chave
  expect(obj).toHaveProperty('name', 'John'); // verifica se possui a chave e o valor informado
  expect(obj.name).toBe('John'); // indo direto na propriedade declarada

  const obj2 = { name: 'John', mail: 'john@mail.com'};
  expect(obj).toEqual(obj2); // em casos de comparação de objeto, usar o toEqual
});
