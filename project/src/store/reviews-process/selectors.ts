import {NameSpace} from '../root-reducer';
import {State} from '../../types/state';
import {ReviewStatus} from '../../const';
import {Reviews} from '../../types/review';

const getReviews = (state: State): Reviews => state[NameSpace.Reviews].reviews;
const getReviewsStatus = (state: State): ReviewStatus => state[NameSpace.Reviews].reviewStatus;
const getIsReviewsLoaded = (state: State): boolean => state[NameSpace.Reviews].isReviewsLoaded;

export {getReviews, getReviewsStatus, getIsReviewsLoaded};
