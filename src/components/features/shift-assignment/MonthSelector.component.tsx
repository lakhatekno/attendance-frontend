import { IoIosArrowBack, IoIosArrowForward, IoIosReturnLeft } from 'react-icons/io';
import clsx from 'clsx';
import { useMonthSelectorStore } from '@/store/monthSelector.store';
import { Direction, monthName } from '@/model/monthSelector.model';
import { useShiftManagementStore } from '@/store/shiftManagement.store';

export default function MonthSelector() {
	const { currentMonth, currentYear, setCurrentMonth, selectMonthYear } = useMonthSelectorStore();
  const { isAssigning } = useShiftManagementStore();
	const buttonClasses = 'cursor-pointer size-6 flex items-center justify-center shadow-2xl border rounded-lg';
	return (
		<div className="flex flex-row w-fit gap-4 items-center">
			{/* Prev */}
			<button
        disabled={ isAssigning }
				className={clsx(buttonClasses)}
				onClick={() => setCurrentMonth(Direction.prev)}
			>
				<IoIosArrowBack />
			</button>

			{/* Current Month Year */}
			<p
				className="cursor-pointer text-center px-2 py-0.5 drop-shadow-2xl w-36"
			>
				{monthName[currentMonth]} 
        {' '} 
        {currentYear}
			</p>

			{/* Next */}
			<button
        disabled={ isAssigning }
				className={clsx(buttonClasses)}
				onClick={() => setCurrentMonth(Direction.next)}
			>
				<IoIosArrowForward />
			</button>

			{/* Start Change Month */}
			<button
				disabled={ isAssigning }
        onClick={selectMonthYear}
				className={clsx(buttonClasses)}
			>
				<IoIosReturnLeft />
			</button>
		</div>
	);
}
