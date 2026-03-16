function SignUprFeature({ dir = "rtl" }) {
  return (
    <div
      dir={dir}
      className="
        w-[85%]
        mx-auto
        bg-white/60
        border
        border-[#F5841E]
        rounded-lg
        overflow-hidden
        p-8
        flex
        flex-col
        gap-6
      "
    >
      {/* title */}
      <div className="flex flex-col gap-3">
        <h2 className=" text-[#2F3A5F] font-semibold text-lg">
          تسجيل حساب جديد
        </h2>

        <div className="w-full h-[2px] bg-[#C9E1E6]" />
      </div>

      {/* form */}
      <form className="flex flex-col w-1/3 gap-5  mx-auto">
        
        {/* name */}
        <div className="flex flex-col gap-2 ">
          <label className="text-[#2F3A5F] text-sm font-medium">
            الاسم كامل :
          </label>

          <input
            type="text"
            className="
              w-full
              border
              border-gray-300
              rounded-md
              px-3
              py-2
              outline-none
              focus:border-[#F5841E]
            "
          />
        </div>

        {/* phone */}
        <div className="flex flex-col gap-2 ">
          <label className="text-[#2F3A5F] text-sm font-medium">
            رقم الهاتف :
          </label>

          <input
            type="tel"
            className="
              w-full
              border
              border-gray-300
              rounded-md
              px-3
              py-2
              outline-none
              focus:border-[#F5841E]
            "
          />
        </div>

        {/* account type */}
        <div className="flex flex-col gap-2 ">
          <label className="text-[#2F3A5F] text-sm font-medium">
            نوع الحساب :
          </label>

          <select
            className="
              w-1/2
              border
              border-gray-300
              rounded-md
              px-3
              py-2
              outline-none
              focus:border-[#F5841E]
              bg-white
            "
          >
            <option>عميل</option>
            <option>تاجر</option>
          </select>
        </div>

        {/* password */}
        <div className="flex flex-col gap-2 ">
          <label className="text-[#2F3A5F] text-sm font-medium">
            كلمة المرور :
          </label>

          <input
            type="password"
            className="
              w-full
              border
              border-gray-300
              rounded-md
              px-3
              py-2
              outline-none
              focus:border-[#F5841E]
            "
          />
        </div>

        {/* confirm password */}
        <div className="flex flex-col gap-2 ">
          <label className="text-[#2F3A5F] text-sm font-medium">
            أعد كتابة كلمة المرور :
          </label>

          <input
            type="password"
            className="
              w-full
              border
              border-gray-300
              rounded-md
              px-3
              py-2
              outline-none
              focus:border-[#F5841E]
            "
          />
        </div>

        {/* button */}
        <button
          type="submit"
          className="
            mt-3
            mx-auto
            bg-[#F5841E]
            text-white
            px-10
            py-2
            rounded-md
            shadow
            hover:opacity-90
          "
        >
          تسجيل
        </button>
      </form>
    </div>
  );
}

export default SignUprFeature;