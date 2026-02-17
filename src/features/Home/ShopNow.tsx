function ShopNow() {
  return (
    <div className="w-[80%] mx-auto my-15 relative rounded-lg overflow-hidden shadow-lg h-[291px]">
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

      {/* Shop Now button */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
    <button className="
  text-[18px] 
  font-bold 
  text-white 
  text-center 
  w-[173px] 
    bg-orange-500 py-2 rounded-full
    mb-5

"> تسوق الآن
        </button>
      </div>
    </div>
  );
}

export default ShopNow;
