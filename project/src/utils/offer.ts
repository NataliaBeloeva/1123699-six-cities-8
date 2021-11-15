const PERCENT_COUNT = 100;
const RATING_COUNT = 5;

const getRating = (rating: number): number => (Math.floor(rating) * PERCENT_COUNT) / RATING_COUNT;

const formatDate= (date: string): string => new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

const formatDateAttribute = (date: string): string => new Date(date).toLocaleDateString('en-CA');

const validatePassword = (password: string): string => password.includes(' ') ? 'Spaces are not allowed in password field' : '';

export {getRating, formatDate, formatDateAttribute, validatePassword};
