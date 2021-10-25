const RATING_CALC = 20;

const getRating = (rating: number): number => {
  const roundedRating: number = Math.floor(rating);
  return roundedRating * RATING_CALC;
};

const formatDate= (date: string): string => new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

const formatDateAttribute = (date: string): string => new Date(date).toLocaleDateString('en-CA');

export {getRating, formatDate, formatDateAttribute};
