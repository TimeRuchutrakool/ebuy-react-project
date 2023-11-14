import { useCountdown } from "../../hooks/useCountDown";

function CountDown({
  duration,
  targetDate = null,
  setDisabledIsBiding,
  textSize = "text-xl",
  setBiding = () => {},
}) {
  const { days, hours, minutes, seconds } = useCountdown(
    targetDate,
    duration,
    setDisabledIsBiding,
    setBiding
  );

  if (
    new Date(targetDate).getTime() + duration <
    Date.now() + 7 * 60 * 60 * 1000
  ) {
    return <p>สิ้นสุดการประมูล</p>;
  }
  if (new Date(targetDate).getTime() < Date.now() + 7 * 60 * 60 * 1000)
    return <p>กำลังประมูล</p>;
  return (
    <p className={`text-red-700 ${textSize}`}>
      {days}D {hours}H {minutes}M {seconds}S
    </p>
  );
}

export default CountDown;
