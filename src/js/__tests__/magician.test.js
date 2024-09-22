import Magician from "../Magician";

test("Magician attack without stoned", () => {
  let character = new Magician(100);
  character.distance = 2;
  expect(character.attack).toBe(90);
});

test("Magician attack with stoned", () => {
    let character = new Magician(100);
    character.distance = 2;
    character.stoned = true;
    expect(character.attack).toBe(85);
  });
