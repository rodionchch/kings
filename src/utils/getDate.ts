import moment from 'moment';

const getDate = (date: string) => {
  const today = moment(date).isSame(new Date(), 'day');
  const year = moment(date).isSame(new Date(), 'year');

  if (today) {
    return `Today ${moment(date).format('HH:mm')}`;
  } else if (!year) {
    return moment(date).format('DD.MM.YYYY');
  }
  return moment(date).format('DD MMM');
};

export default getDate;
