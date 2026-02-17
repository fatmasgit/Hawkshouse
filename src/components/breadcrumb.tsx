function BreadCrumb() {


   let title = "";

  if (location.pathname === "/seeds") {
    title = "بذور";
  } else if (location.pathname === "/nutrients") {
    title = "مغذيات";
  } else if (location.pathname === "/pesticides") {
    title = "مبيدات";
  } else {
    title = "منتجاتنا"; // optional default
  }

  return (
    <div className="w-[85%] mx-auto my-15 relative rounded-lg overflow-hidden shadow-lg h-[291px]">
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
    <div className="absolute top-[30%] right-[5%] ">
        <p className="text-white font-bold text-[30px] text-center">{title}</p>
      </div>
    </div>
  );
}

export default BreadCrumb;
