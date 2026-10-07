const petersHouse = {
  width: 8,
  depth: 10,
  height: 10,
  gardenSizeInM2: 100,
  realPrice: 2500000,
};

const juliaHouse = {
  width: 5,
  depth: 11,
  height: 8,
  gardenSizeInM2: 70,
  realPrice: 1000000,
};

const petersHouseVolume =
  petersHouse.width * petersHouse.depth * petersHouse.height;

const petersHousePrice =
  petersHouseVolume * 2.5 * 1000 +
  petersHouse.gardenSizeInM2 * 300;

const juliaHouseVolume =
  juliaHouse.width * juliaHouse.depth * juliaHouse.height;

const juliaHousePrice =
  juliaHouseVolume * 2.5 * 1000 +
  juliaHouse.gardenSizeInM2 * 300;

if (petersHouse.realPrice > petersHousePrice) {
  console.log("Peter is paying too much for his house.");
} else {
  console.log("Peter is paying too little for his house.");
}

if (juliaHouse.realPrice > juliaHousePrice) {
  console.log("Julia is paying too much for her house.");
} else {
  console.log("Julia is paying too little for her house.");
}