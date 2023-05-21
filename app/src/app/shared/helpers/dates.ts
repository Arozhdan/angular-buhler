export const formatDateTime = (date: Date) => {
  const fullDate = date.toLocaleString('cs-CZ', {  year: 'numeric', month: 'numeric', day: 'numeric' });
  const time = date.toLocaleString('cs-CZ', { hour: 'numeric', minute: 'numeric',  hour12: false });
  return `${fullDate} ${time}`;
}
