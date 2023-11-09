export const koString = (data) => data.toLocaleString("ko-KR");
export const koDateString = (data) =>
  data.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  });
