'use client';

import { useEffect, useState } from 'react';

export default function Clock() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timerId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(timerId);
		};
	}, []);

	const formattedTime = currentTime.toLocaleTimeString('id-ID', {
		hour: '2-digit',
		minute: '2-digit',
		second: '2-digit',
	});

	const formattedDate = currentTime.toLocaleDateString('id-ID', {
		weekday: 'long', // e.g., Sabtu
		year: 'numeric', // e.g., 2025
		month: 'long', // e.g., Agustus
		day: 'numeric', // e.g., 30
		timeZone: 'Asia/Jakarta',
	});

	return (
		<div className='flex flex-col gap-2'>
			<p className="text-xl font-bold text-indigo-900">{formattedDate}</p>
			<p className="text-5xl font-bold text-indigo-950">{formattedTime}</p>
		</div>
	);
}
