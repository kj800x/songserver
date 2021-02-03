async function main() {
  const command = process.argv[2];
  switch (command) {
    default: {
      console.error(`Unknown command: ${command}`);
      process.exit(1);
    }
  }
}

main().catch(console.error);
