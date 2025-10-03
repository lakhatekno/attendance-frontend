export const formatDate = (date: string): string => {
	const d = new Date(date);
	return d.toLocaleDateString('id-ID', {
		year: 'numeric',
		month: 'short',
		day: 'numeric',
	});
};

export const formatTime = (date: string): string => {
  const d = new Date(date);
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
    timeZone: 'Asia/Jakarta'
  });

  return formatter.format(d);
}