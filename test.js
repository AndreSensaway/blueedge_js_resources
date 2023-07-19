export function dateStringToTimestamp(dateString) {
  const timestamp = Date.parse(dateString);
  if (isNaN(timestamp)) {
    return null;
  }
  return timestamp;
}
