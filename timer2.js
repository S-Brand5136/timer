const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding("utf8");

stdin.on("data", (key) => {
  if (key === "b") process.stdout.write("\x07");

  if (!isNaN(key)) {
    timer(Number(key));
  }

  if (key === "\u0003") {
    process.exit();
  }
});

const timer = (time) => {
  console.log(`setting timer for ${time} seconds... \n`);
  setTimeout(() => {
    process.stdout.write("\x07");
  }, time * 1000);
};
