const RATING_CALC = 20;

const getRating = (rating: number): number => {
  const roundedRating: number = Math.floor(rating);
  return roundedRating * RATING_CALC;
};

export {getRating};
