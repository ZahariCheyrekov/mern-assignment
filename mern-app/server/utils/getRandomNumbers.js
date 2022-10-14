export const getRandomNumbers = (arrayLength) => {
  const randomNumbers = []

  for (let i = 0; i <= 2; i++) {
    randomNumbers.push(Math.floor(Math.random() * arrayLength))
  }

  return randomNumbers
}
