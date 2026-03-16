// ProfileForm.jsx
export default function Profile() {
  return (
    <form dir='rtl' className="flex flex-col items-start gap-6 flex-1">
      {/* Username */}
      <input
        type="text"
        placeholder="أسم المستخدم"
        className="w-[420px] border border-orange rounded-md px-4 py-3 outline-none text-start"
      />

      {/* Phone */}
      <input
        type="tel"
        placeholder="012345678"
        className="w-[420px] border border-orange rounded-md px-4 py-3 outline-none text-start"
      />

      {/* Password */}
      <input
        type="password"
        placeholder="********"
        className="w-[420px] border border-orange rounded-md px-4 py-3 outline-none text-start"
      />

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          type="submit"
          className="bg-orange text-white px-8 py-1 rounded"
        >
          حفظ
        </button>
        <button
          type="button"
          className="border border-orange text-orange px-6 py-1 rounded"
        >
          إرجاع
        </button>

      </div>
    </form>
  );
}