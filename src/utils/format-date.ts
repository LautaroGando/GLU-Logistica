export const formatDate = (isoDate: string) => {
  if (!isoDate.includes("-")) return isoDate;

  const [year, month, day] = isoDate.split("-");
  return `${day}/${month}/${year}`;
};
