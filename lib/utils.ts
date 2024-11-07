import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function ratingOutlookList(rating: string) {
  let list;
  switch (rating) {
    case 'AAA':
      list = ['AAA', 'AAA-'];
      break;
    case 'AA':
      list = ['AA', 'AA-', 'AA+']
      break;
    case 'A':
      list = ['A', 'A-', 'A+']
      break;
    case 'BBB':
      list = ['BBB', 'BBB-', 'BBB+']
      break;
    default:
      list = ["A", "A+", "A-", "AA", "AA+", "AA-", "AAA", "AAA-", "B", "B+", "B-", "BB", "BB+", "BB-", "BBB", "BBB+", "BBB-", "C", "D"];
      break;
  }
  return list;
}