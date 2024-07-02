const readline = require("readline");
const { WritingGameClasses } = require("./writing-game-classes.method");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function chooseOption(query) {
  return new Promise((resolve) => rl.question(query, resolve));
}

async function execute() {
  const name = await chooseOption("Digite o seu nome: ");

  console.log("-------------------------------");

  const age = await chooseOption("Digite a sua idade: ");

  console.log("-------------------------------");

  console.log("Escolha um tipo de item mágico:");
  console.log("1: Mago");
  console.log("2: Guerreiro");
  console.log("3: Monge");
  console.log("4: Ninja");
  console.log("");

  const choose = await chooseOption(
    "Digite o número correspondente ao tipo de item: "
  );

  console.log("-------------------------------");

  const writingGame = new WritingGameClasses();
  const player = writingGame.get(choose);

  console.log(`Jogador: ${name}`);
  console.log(`Idade: ${age}`);

  console.log("-------------------------------");
  console.log("");

  console.log(`o ${player.type} atacou usando ${player.attack}`);
  console.log("");

  rl.close();
}

execute();
