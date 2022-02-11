export const handleUrl = (name) => {
  const res = name.toLowerCase().split("");
  return res
    .map((char) => {
      if (char === "å") {
        return "a";
      }
      if (char === "é") {
        return "e";
      }
      if (char === " ") {
        return "-";
      } else return char;
    })
    .join("");
};
