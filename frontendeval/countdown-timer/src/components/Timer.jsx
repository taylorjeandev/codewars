export default function Timer({ time }) {
  return (
    <div className="timer">
      <h1>
        {time.hours}:{time.minutes}:{time.seconds}
      </h1>
    </div>
  );
}
