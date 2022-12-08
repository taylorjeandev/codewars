export default function Form() {
  return (
    <form className="form" onSubmit={handleStart}>
      <input type="text" placeholder="Hours" name="hours" id="hours" />
      <input type="text" placeholder="Minutes" name="minutes" id="minutes" />
      <input type="text" placeholder="Seconds" name="seconds" id="seconds" />
      <input type="submit" value="Start" />
    </form>
  );
}
