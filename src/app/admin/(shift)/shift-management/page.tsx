'use client'

import HeadSection from "@/components/features/shift-management/HeadSection.component";
import { TableListOfShifts } from "@/components/features/shift-management/TableListOfShifts.component";

export default function ShiftManagementPage() {
	return (
		<section className="bg-white shadow rounded-xl p-8">
			<HeadSection />
			<TableListOfShifts />
		</section>
	);
}
