export const smartCutBySymbols = (text?: string, count?: number) => {
  if (text && count) {
    if (text?.length <= count) {
      return text;
    }
    return `${text.slice(0, count)}...`;
  }
};

export const smartCutByWorlds = (text?: string, count?: number) => {
  if (text && count) {
    return `${text.split(' ').slice(0, count).join(' ')}...`;
  }
};
