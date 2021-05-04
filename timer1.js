const args = process.argv.slice(2);

for (const i of args) {
  const time = Number(i);
  if (isNaN(i) || time < 0) {
    continue;
  }
  setTimeout(() => {
    process.stdout.write("\x07");
  }, i * 1000);
}
