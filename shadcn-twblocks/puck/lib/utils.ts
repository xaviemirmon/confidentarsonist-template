const adjectives = ["amazing", "new", "wonderful", "beautiful", "smart"];

export function getRandomAdjective(arr = adjectives): string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
