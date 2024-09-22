import Character from "../Character";

test("Attack on 1st cell without stoned (100%)", () => {
  const character = new Character(100);
  character.distance = 1;
  expect(character.attack).toBe(100);
});

test("Attack on 2nd cell without stoned (90%)", () => {
  const character = new Character(100);
  character.distance = 2;
  expect(character.attack).toBe(90);
});

test("Attack on 5th cell without stoned (60%)", () => {
  const character = new Character(100);
  character.distance = 5;
  expect(character.attack).toBe(60);
});

test("Attack with stoned on 2nd cell", () => {
  const character = new Character(100);
  character.distance = 2;
  character.stoned = true;
  expect(character.attack).toBe(85);
});

test("Attack with stoned on 5th cell", () => {
  const character = new Character(100);
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(48);
});

test("Attack on 1st cell with stoned (should remain 100%)", () => {
  const character = new Character(100);
  character.distance = 1;
  character.stoned = true;
  expect(character.attack).toBe(100);
});

test("Attack becomes 0 or positive (never negative)", () => {
  const character = new Character(1);
  character.distance = 5;
  character.stoned = true;
  expect(character.attack).toBe(0);
});

test("Stoned getter and setter work correctly", () => {
  const character = new Character(100);
  character.stoned = true;
  expect(character.stoned).toBe(true);
  character.stoned = false;
  expect(character.stoned).toBe(false);
});

test("Attack getter and setter for Attack work correctly", () => {
  const character = new Character(100);
  character.attack = 150;
  expect(character._attack).toBe(150);
});
