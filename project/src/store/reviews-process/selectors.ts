import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {ReviewStatus} from '../../const';
import {Reviews} from '../../types/review';

const getReviews = (state: State): Reviews => state[NameSpace.reviews].reviews;
const getReviewsStatus = (state: State): ReviewStatus => state[NameSpace.reviews].reviewStatus;
const getIsReviewsLoaded = (state: State): boolean => state[NameSpace.reviews].isReviewsLoaded;

export {getReviews, getReviewsStatus, getIsReviewsLoaded};
