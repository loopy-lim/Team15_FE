const paymoney = { succes: true, response: { piece: 50000 }, error: null };

export const getPaymoney = async () => {
  return Promise.resolve(paymoney.response);
};
