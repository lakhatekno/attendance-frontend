'use client'
import HeadSection from "@/components/features/shift-assignment/HeadSection.component";
import ShiftCalendarGrid from "@/components/features/shift-assignment/ShiftCalendarGrid.component";

export default function ShiftAssignmentPage() {
  return (
    <section className="bg-white shadow rounded-xl p-8 max-w-full overflow-y-clip">
      <HeadSection />
      <ShiftCalendarGrid 
        employees={[
          {
            id: 'emp1',
            name: 'diki',
          },
          {
            id: 'emp2',
            name: 'doki',
          },
          {
            id: 'emp3',
            name: 'diko',
          },
        ]}
      />
    </section>
  )
}