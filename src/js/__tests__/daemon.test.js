import Daemon from "../Daemon";

test("Daemon attack without stoned", () => {
  let character = new Daemon(100);
  character.distance = 5;
  expect(character.attack).toBe(60);
});

test("Daemon attack with stoned", () => {
    let character = new Daemon(100);
    character.distance = 5;
    character.stoned = true;
    expect(character.attack).toBe(48);
  });
