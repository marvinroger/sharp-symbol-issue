async function main() {
  console.log("Requiring sharp...");
  const sharp = require("sharp");

  console.log("Generating image...");
  const image = await sharp({
    create: {
      width: 256,
      height: 256,
      channels: 4,
      background: { r: 255, g: 0, b: 0, alpha: 0.5 },
    },
  })
    .png()
    .toBuffer();

  console.log(image);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
