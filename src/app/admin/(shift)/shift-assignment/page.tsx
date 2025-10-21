'use client'
import HeadSection from "@/components/features/shift-assignment/HeadSection.component";
import MonthSelector from "@/components/features/shift-assignment/MonthSelector.component";
import ShiftCalendarGrid from "@/components/features/shift-assignment/ShiftCalendarGrid.component";

export default function ShiftAssignmentPage() {
  return (
    <section className="flex flex-col gap-4 bg-white shadow rounded-xl p-8 max-w-full overflow-y-clip">
      <HeadSection />
      <div className="flex justify-end">
        <MonthSelector />
      </div>
      <ShiftCalendarGrid />
    </section>
  )
}