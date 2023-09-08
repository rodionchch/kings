const isValidJsonString = (data: any) => {
  if (typeof data === 'object') {
    return true;
  }
  if (!(data && typeof data === 'string')) {
    return false;
  }

  try {
    JSON.parse(data);
    return true;
  } catch (error) {
    return false;
  }
};

export default isValidJsonString;
