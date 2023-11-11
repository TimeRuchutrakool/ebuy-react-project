import { useEffect, useState } from "react";

const useCountdown = (targetDate, duration, setDisabledIsBiding) => {
  const countDownDate = new Date(targetDate).getTime();

  const [countDown, setCountDown] = useState(
    countDownDate - (new Date().getTime() + 7 * 60 * 60 * 1000)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(
        countDownDate - (new Date().getTime() + 7 * 60 * 60 * 1000)
      );
    }, 1000);

    if (
      countDownDate + duration <
      new Date().getTime() + 7 * 60 * 60 * 1000
    ) {
      clearInterval(interval);
      setDisabledIsBiding(true);
    } else if (countDownDate > new Date().getTime() + 7* 60 * 60 * 1000) {
      setDisabledIsBiding(true);
    } else setDisabledIsBiding(false);
    return () => clearInterval(interval);
  }, [countDownDate, duration, setDisabledIsBiding]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
};

export { useCountdown };
