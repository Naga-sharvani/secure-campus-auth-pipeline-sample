// this is not required currently but useful to support base64 image data in the future(webcam capture)
export const base64ToBuffer = (base64) => {
  const data = base64.replace(/^data:image\/\w+;base64,/, "");
  return Buffer.from(data, "base64");
};