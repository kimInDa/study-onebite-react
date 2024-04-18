export const getStringedDate = (targetDate) => {
  // new Date() -> YYYY-MM-DD 로 변환 : date 타입의 input은 vlaue로 들어오는 값의 형식으로 "YYYY-MM-DD"만 인식하기 떄문에
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  // 한자리 수의 월과 일의 앞자리에 0 붙여주기
  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`;
};
