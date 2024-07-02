const { WritingGameClasses } = require("./writing-game-classes.method");
const { attacks, types, unknown } = require("./writing-game-classes.mock");

describe("RankedMatches", () => {
  const writingGame = new WritingGameClasses();

  it(`should return "${types[1]}" and "${attacks[1]}" when choice is equal to 1`, () => {
    const player = writingGame.get(1);
    expect(player.attack).toEqual(attacks[1]);
    expect(player.type).toEqual(types[1]);
  });
  it(`should return "${types[2]}" and "${attacks[2]}" when choice is equal to 2`, () => {
    const player = writingGame.get(2);
    expect(player.attack).toEqual(attacks[2]);
    expect(player.type).toEqual(types[2]);
  });
  it(`should return "${types[3]}" and "${attacks[3]}" when choice is equal to 3`, () => {
    const player = writingGame.get(3);
    expect(player.attack).toEqual(attacks[3]);
    expect(player.type).toEqual(types[3]);
  });
  it(`should return "${types[4]}" and "${attacks[4]}" when choice is equal to 4`, () => {
    const player = writingGame.get(4);
    expect(player.attack).toEqual(attacks[4]);
    expect(player.type).toEqual(types[4]);
  });
  it(`should return "ataque ${unknown}" and "${unknown}" when it does not satisfy any condition`, () => {
    const player = writingGame.get(5);
    expect(player.attack).toEqual(`ataque ${unknown}`);
    expect(player.type).toEqual(unknown);
  });
});
