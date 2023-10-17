export const RENTAL_TYPE = {
  RENTAL: "RENTAL",
  RENTAL_SCHEDULE: "RENTAL_SCHEDULE",
  RENTAL_COMPLETE: "RENTAL_COMPLETE",
};

/**
 * @param {Object} param
 * @param {string} param.borrowAt date string
 * @param {string} param.returnAt date string
 * @return {{ type: keyof typeof RENTAL_TYPE, dayDiff?: number }}
 */
export const getRentalType = ({ borrowAt, returnAt }) => {
  const dateDiff = new Date(returnAt).getTime() - new Date(borrowAt).getTime();
  const isBeforeBorrwoing = new Date(borrowAt) > new Date();
  const isAfterBorrwoing = new Date(returnAt) < new Date();
  const dayDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  if (isBeforeBorrwoing) {
    return { type: RENTAL_TYPE.RENTAL_SCHEDULE };
  }
  if (isAfterBorrwoing) {
    return { type: RENTAL_TYPE.RENTAL_COMPLETE };
  }
  if (dayDiff > 0) {
    return { type: RENTAL_TYPE.RENTAL, dayDiff };
  }
  return { type: RENTAL_TYPE.RENTAL_SCHEDULE };
};
