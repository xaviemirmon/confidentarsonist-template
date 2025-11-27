import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const adjectives = ["amazing", "new", "wonderful", "beautiful", "smart"];

export function getRandomAdjective(arr = adjectives): string {
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}
