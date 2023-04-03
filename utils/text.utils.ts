/**
 * @param text the text you want to slice
 * @param value the length you want
 * @param additionalText the additionnal text you want to append to text
 * @return text with length wanted
 * **/
export function textSlice(
  text: string,
  value: number,
  additionalText?: string
): string {
  return text?.length > value
    ? `${text.slice(0, value)} ${additionalText ? additionalText : ""}`
    : text;
}
