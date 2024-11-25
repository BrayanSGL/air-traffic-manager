export function clock() {
  const now = new Date();
  const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const millisecondsSinceStartOfDay = now.getTime() - startOfDay.getTime();
  const newTime = millisecondsSinceStartOfDay * 48;
  const newDate = new Date(startOfDay.getTime() + newTime);
  return newDate.toISOString().slice(0, 19).replace("T", " ");
}