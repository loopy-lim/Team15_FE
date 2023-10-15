const rental = {
  success: true,
  response: [
    {
      productId: "733d7309-5ab8-47d2-98e6-4843e4974189",
      name: "아이패드",
      borrowAt: `${new Date(new Date().getTime() + 10 * 60 * 60 * 24 * 1000)}`,
      returnAt: `${new Date(new Date().getTime() + 30 * 60 * 60 * 24 * 1000)}`,
      reviewed: false,
    },
    {
      productId: "733d7309-5ab8-47d2-98e6-4843e497418a",
      name: "아이패드",
      borrowAt: `${new Date()}`,
      returnAt: `${new Date(new Date().getTime() + 30 * 60 * 60 * 24 * 1000)}`,
      reviewed: false,
    },
    {
      productId: "733d7309-5ab8-47d2-98e6-4843e497418b",
      name: "아이패드",
      borrowAt: `${new Date(new Date().getTime() - 30 * 60 * 60 * 24 * 1000)}`,
      returnAt: `${new Date(new Date().getTime() - 30 * 60 * 60 * 1000)}`,
      reviewed: false,
    },
    {
      productId: "733d7309-5ab8-47d2-98e6-4843e497418c",
      name: "아이패드",
      borrowAt: `${new Date(new Date().getTime() - 30 * 60 * 60 * 24 * 1000)}`,
      returnAt: `${new Date(new Date().getTime() - 30 * 60 * 60 * 1000)}`,
      reviewed: true,
    },
  ],
  error: null,
};

export const getAllRental = async () => {
  return Promise.resolve(rental.response);
};
