export const isFalsy = (value) => value === 0 ? false : !value;

// 不要汙染傳入對向
export const cleanObject = (obj) => {
  const result = { ...obj };
  Object.keys(result).forEach(key => {
    const value = result[key]
    if (isFalsy(value)) {
      delete result[key]
    }
  })
  return result
}