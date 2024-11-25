export function clock() {
  const now = new Date();
  const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  const millisecondsSinceStartOfDay = now.getTime() - startOfDay.getTime();
  const newTime = millisecondsSinceStartOfDay * 48;
  const newDate = new Date(startOfDay.getTime() + newTime);
  return newDate.toISOString().slice(0, 19).replace("T", " ");
}