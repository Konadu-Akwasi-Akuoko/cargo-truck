interface Size {
  width: number;
  length: number;
  height: number;
}

interface Category {
  category: string;
}

type calculateSizePrice = Size | Category;

export const calculateSizePrice = (size: calculateSizePrice) => {
  let price = 0;
  if ("category" in size) {
    // size is Category here
    switch (size.category) {
      case "xs":
        price = 15;
        break;
      case "sm":
        price = 30;
        break;
      case "md":
        price = 60;
        break;
      case "lg":
        price = 120;
        break;
      case "xl":
        price = 240;
        break;
      default:
        price = 0;
    }
  } else {
    const area = size.width * size.length * size.height;
    // Every 10inches^3 is 1GHC
    price = (area / 10) * 1;
  }

  return price;
};
