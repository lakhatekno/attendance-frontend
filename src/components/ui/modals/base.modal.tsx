'use client';

import { MdClose } from 'react-icons/md';

interface Props {
	open: boolean;
	onClose: () => void;
	title?: string;
	children?: React.ReactNode | React.ReactNode[];
}

export default function BaseModal({ open, onClose, title, children }: Props) {
	if (!open) return null;

	return (
		<div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
			<div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
				<div className="flex items-center justify-between w-full mb-6 text-indigo-900">
					<h2 className="text-xl font-bold">{title}</h2>
					<button
						onClick={onClose}
						className="cursor-pointer"
					>
						<MdClose className="scale-150" />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
}
