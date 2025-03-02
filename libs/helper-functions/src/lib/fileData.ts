export function formatFileSize(bytes: number): string {
  if (bytes < 0) {
    throw new Error('Die Anzahl der Bytes muss positiv sein.');
  }

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  let unitIndex = 0;

  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024;
    unitIndex++;
  }

  return `${bytes.toFixed(2)} ${units[unitIndex]}`;
}
