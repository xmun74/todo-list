export default function Header() {
  const today = new Date();

  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });
  return (
    <>
      <h1>
        {dateString}&nbsp;
        {dayName}
      </h1>
    </>
  );
}
