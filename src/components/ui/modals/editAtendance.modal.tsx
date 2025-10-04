'use client'

import { useAttendanceLogOperationsStore } from "@/store/attendance-log.store"
import { AttendanceCategory, AttendanceStatus } from '@/model/attendance-log.model'
import { useEffect, useState } from 'react'

type FormState = {
  id: number | null;
  record: string;
  category: AttendanceCategory;
  status: AttendanceStatus;
}

export default function EditAttendance() {
  const { updateLogHandler, updateLogForm, setLogData, setEditRecordModal } = useAttendanceLogOperationsStore();

  const [form, setForm] = useState<FormState>({ id: null, record: '', category: 'checkin', status: 'ontime' });

  useEffect(() => {
    if (updateLogForm) {
      setForm({
        id: updateLogForm.id,
        record: updateLogForm.record,
        category: updateLogForm.category,
        status: updateLogForm.status,
      });
    }
  }, [updateLogForm]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value } as FormState));
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.id) return;
    // build minimal AttendanceLog shape expected by update
    updateLogHandler({
      id: form.id,
      date: updateLogForm?.date || '',
      shift_assignment: updateLogForm!.shift_assignment,
      name: updateLogForm!.name,
      record: form.record,
      category: form.category,
      status: form.status,
    });
  }

  return (
    <>
      <form className="flex flex-col gap-6" onSubmit={submitHandler}>
        <input
          type="text"
          name="id"
          value={form.id ?? ''}
          disabled
          className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full bg-gray-100"
        />

        <input
          type="datetime-local"
          name="record"
          value={form.record}
          onChange={handleChange}
          className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full"
        />

        <select
          name="category"
          value={form.category}
          onChange={handleChange}
          className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full"
        >
          <option value="checkin">Check In</option>
          <option value="checkout">Check Out</option>
        </select>

        <select
          name="status"
          value={form.status}
          onChange={handleChange}
          className="border-b border-b-indigo-900 focus:outline-none focus:border-b-2 p-2 w-full"
        >
          <option value="ontime">On Time</option>
          <option value="late">Late</option>
          <option value="early">Early</option>
          <option value="early_leave">Early Leave</option>
          <option value="late_checkout">Late Checkout</option>
        </select>

        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={() => setEditRecordModal()}
            type="button"
            className="text-gray-600 hover:text-gray-800 font-semibold cursor-pointer"
          >
            Batal
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-600 font-semibold text-slate-100 rounded-lg cursor-pointer hover:bg-green-700"
          >
            Simpan
          </button>
        </div>
      </form>
    </>
  )
}