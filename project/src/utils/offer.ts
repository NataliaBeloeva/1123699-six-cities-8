const PERCENT_COUNT = 100;
const RATING_COUNT = 5;

const getRating = (rating: number): number => (Math.round(rating) * PERCENT_COUNT) / RATING_COUNT;

const formatDate= (date: string): string => new Date(date).toLocaleDateString('en-US', {month: 'long', year: 'numeric'});

const formatDateAttribute = (date: string): string => new Date(date).toLocaleDateString('en-CA');

const validatePassword = (password: string): string => {
  const passwordReg = /(?=.*[A-Za-z])(?=.*[0-9])[A-Za-z0-9]+/;
  if (password.includes(' ')) {
    return 'Spaces are not allowed in password';
  }
  if (!passwordReg.test(password)) {
    return 'Password must contain at least one letter and a number';
  }
  return '';
};

const validateEmail = (email: string): string => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(email)) {
    return 'Please enter valid email';
  }
  return '';
};

const capitalizeFirstLetter = (string: string): string => string.charAt(0).toUpperCase() + string.slice(1);

const getRandomPositiveInteger = (a: number, b: number): number => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

export {getRating, formatDate, formatDateAttribute, validatePassword, validateEmail, capitalizeFirstLetter, getRandomPositiveInteger};
