const { attacks, types, unknown } = require("./writing-game-classes.mock");

class GameClasses {
  /*** @param {Number} choose */
  get(choose) {
    throw new Error(`This ${choose} method should be overridden!`);
  }
}

class SelectPlayer extends GameClasses {
  /***
   * @param {Number} choose
   * @typedef {Object} Player
   * @property {String} attack
   * @property {String} type
   * @returns {Player}
   *
   */
  get(choose) {
    return {
      attack: attacks[choose] || `ataque ${unknown}`,
      type: types[choose] || unknown,
    };
  }
}

class WritingGameClasses {
  #player;
  constructor() {
    this.#player = new SelectPlayer();
  }

  /*** @param {Number} choose */
  get(choose) {
    return this.#player.get(choose);
  }
}

module.exports = { WritingGameClasses };
