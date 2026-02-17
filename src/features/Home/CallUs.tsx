function CallUs() {
    return (
        <div dir="rtl" className="w-[70%] mx-auto my-15 relative rounded-lg overflow-hidden shadow-lg h-[210px] ">

            {/* Background image */}
            <div
                className="w-full h-full bg-cover bg-center"
                style={{
                    backgroundImage:
                        "url('https://www.shutterstock.com/image-photo/test-word-made-wood-background-260nw-1779376307.jpg')",
                }}
            ></div>

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-[#11110E] opacity-60 mix-blend-multiply"></div>

            {/* Content */}
            <div className="absolute inset-0 flex  justify-around items-center  text-white">

                {/* Text above button */}
                <span
                    className="
            text-[32px]
            leading-[43px]
            font-bold
            font-[Noto Sans Arabic Condensed]
            tracking-[0.32px]
            mb-4
            text-white
          "
                >
                    هل انت مهتم بمنتجاتنا ؟
                </span>

                {/* Shop Now button */}
                <button className="
  text-[18px] 
  font-bold 
  text-white 
  text-center 
  w-[173px] 
    bg-orange-500 py-2 rounded-full
    mb-5

"> اتصل بنا
                </button>

            </div>
        </div>
    );
}

export default CallUs;
