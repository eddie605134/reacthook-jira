export const isFalsy = (value: unknown) => value === 0 ? false : !value;

// 不要汙染傳入對向
export const cleanObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(result).forEach((key: string) => {
    //@ts-ignore
    const value = result[key]
    if (isFalsy(value)) {
      //@ts-ignore
      delete result[key]
    }
  })
  return result
}