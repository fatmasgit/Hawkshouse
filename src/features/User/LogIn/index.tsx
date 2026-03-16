function LoginFeature({ dir = "rtl" }) {
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
        gap-8
      "
    >
      {/* title */}
      <div className="flex flex-col gap-3">
        <h2 className="text-right text-[#2F3A5F] font-semibold text-lg">
          تسجيل دخول
        </h2>

        <div className="w-full h-[2px] bg-[#C9E1E6]" />
      </div>

      {/* form */}
      <form className="flex flex-col items-center gap-6">

        {/* full name */}
        <div className="flex flex-col gap-2 w-[360px]">
          <label className="text-right text-[#2F3A5F] font-medium">
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
        <div className="flex flex-col gap-2 w-[360px]">
          <label className="text-right text-[#2F3A5F] font-medium">
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

        {/* password */}
        <div className="flex flex-col gap-2 w-[360px]">
          <label className="text-right text-[#2F3A5F] font-medium">
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

        {/* button */}
        <button
          type="submit"
          className="
            mt-4
            bg-[#F5841E]
            text-white
            px-12
            py-2
            rounded-md
            shadow
            hover:opacity-90
          "
        >
          تسجيل دخول
        </button>

      </form>
    </div>
  );
}

export default LoginFeature;