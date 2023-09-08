export const phoneMask = (val?: string | number) => {
  let phone = val;

  if (!phone || isNaN(Number(phone))) {
    return val;
  }

  if (typeof phone !== 'string') {
    phone = phone.toString();
  } else {
    phone = phone.replace(/[^0-9]/g, '');
  }
  if (phone.length === 12) {
    return phone.replace(/(\d{3})(\d{2})(\d{3})(\d{4})/, '+$1 $2 $3 $4');
  } else if (phone.length === 11) {
    return phone.replace(
      /(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})/,
      '+$1 $2 $3 $4 $5',
    );
  }

  return `${val}`;
};
