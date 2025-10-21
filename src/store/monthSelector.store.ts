import { Direction, MonthSelectorState } from '@/model/monthSelector.model';
import { create } from 'zustand';

export const useMonthSelectorStore = create<MonthSelectorState>((set, get) => ({
	currentMonth: new Date().getMonth(),
	currentYear: new Date().getFullYear(),
	setCurrentMonth: (direction: Direction) => {
		switch (direction) {
			case Direction.next:
				const nextIndex = get().currentMonth + 1;
				if (nextIndex > 11) {
					const nextYear = get().currentYear + 1;
					set({ currentMonth: 0, currentYear: nextYear });
				} else {
					set({ currentMonth: nextIndex });
				}
				break;
			case Direction.prev:
				const prevIndex = get().currentMonth - 1;
				if (prevIndex < 0) {
					const prevYear = get().currentYear - 1;
					set({ currentMonth: 11, currentYear: prevYear });
				} else {
					set({ currentMonth: prevIndex });
				}
				break;
		}
	},
	setCurrentYear: () => {},
  selectMonthYear: () => {
    alert('select month year')
  }
}));
