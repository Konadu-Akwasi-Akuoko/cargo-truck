// Calculate the size price in inches, and ten cubic inches wil be 1GHC

interface calculateSizePrice {
  size:
    | {
        width: number;
        length: number;
        height: number;
      }
    | { category: string };
}
export const calculateSizePrice = ({ size }: calculateSizePrice) => {};
