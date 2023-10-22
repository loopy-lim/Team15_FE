export const ERROR_TYPE = {
  ALERT: "ALERT",
  ALERT_AND_REDIRECT: "ALERT_AND_REDIRECT",
  NOTIFY: "NOTIFY",
  NOT_LOGINED: "NOT_LOGINED",
};

export const errorCase = {
  join_email_format: {
    message: "이메일 형식이 올바르지 않습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  join_duplicated_email: {
    message: "이미 가입된 이메일입니다.",
    type: ERROR_TYPE.ALERT,
  },
  join_password_format: {
    message: "영문, 숫자, 특수문자가 포함되어야하고 공백이 포함될 수 없습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  check_email_format: {
    message: "이메일 형식이 올바르지 않습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  check_existed_email: {
    message: "이미 가입된 이메일입니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  login_email_format: {
    message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  login_unauthenticated_user: {
    message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  login_password_format: {
    message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  login_password_length: {
    message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  logout_not_logined: {
    message: "로그인이 필요합니다.",
    type: ERROR_TYPE.NOT_LOGINED,
  },
  user_password_format: {
    message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  user_password_length: {
    message: "이메일 또는 비밀번호가 일치하지 않습니다.",
    type: ERROR_TYPE.NOTIFY,
  },
  product_not_existed: {
    message: "존재하지 않는 제품입니다.",
    type: ERROR_TYPE.ALERT_AND_REDIRECT,
  },
  rent_not_existed: {
    message: "존재하지 않는 제품입니다.",
    type: ERROR_TYPE.ALERT_AND_REDIRECT,
  },
  rent_past_period: {
    message: "대여 기간은 현재 시간 이후여야 합니다.",
    type: ERROR_TYPE.ALERT,
  },
  rent_incorrect_period: {
    message: "대여 기간이 올바르지 않습니다.",
    type: ERROR_TYPE.ALERT,
  },
  create_not_existed: {
    message: "존재하지 않는 제품입니다.",
    type: ERROR_TYPE.ALERT_AND_REDIRECT,
  },
  create_past_period: {
    message: "대여 기간은 현재 시간 이후여야 합니다.",
    type: ERROR_TYPE.ALERT,
  },
  create_incorrect_period: {
    message: "대여 기간이 올바르지 않습니다.",
    type: ERROR_TYPE.ALERT,
  },
  create_insufficient_coin: {
    message: "충전 페이머니가 부족합니다.",
    type: ERROR_TYPE.ALERT,
  },
  category_not_existed: {
    message: "존재하지 않는 카테고리입니다.",
    type: ERROR_TYPE.ALERT_AND_REDIRECT,
  },
  return_early_returned: {
    message: "반납 예정일이 아닙니다.",
    type: ERROR_TYPE.ALERT,
  },
  review_not_existed: {
    message: "존재하지 않는 리뷰입니다.",
    type: ERROR_TYPE.ALERT_AND_REDIRECT,
  },
  review_content_length: {
    message: "리뷰 내용은 1자 이상이어야 합니다.",
    type: ERROR_TYPE.ALERT,
  },
  review_unauthorized_product: {
    message: "본인이 작성한 리뷰만 수정할 수 있습니다.",
    type: ERROR_TYPE.ALERT,
  },
};
