const currentDate = new Date();

const dateOnly = {
    year: currentDate.getFullYear(),
    month: currentDate.getMonth() + 1, // Months are zero-based
    date: currentDate.getDate()
};

const timeOnly = {
    hours: currentDate.getHours(),
    minutes: currentDate.getMinutes(),
    seconds: currentDate.getSeconds()
};

export { dateOnly, timeOnly };