const HomeTemplate = () => {
  return (
    <div className="content grid grid-cols-2">
      <div className="content-left col-span-1 py-40 px-[80px]">
        <h2 className="text-[40px] font-bold pr-[100px]">Introduce Your Smart Printing & Effectively</h2>
        <p className="mt-30 text-[#505F98] pr-20">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        <div className="left-action my-[80px] flex items-center gap-30">
          <button className="bg-[#1B1BEF] text-white border-2 border-[#1B1BEF] hover:bg-white hover:text-[#1B1BEF] transition-all font-medium py-4 px-20 rounded">
            Purchase UI Kit
          </button>
          <button className="bg-white text-[#1B1BEF] border-2 border-[#1B1BEF] hover:bg-[#1B1BEF] hover:text-white transition-all font-medium py-4 px-20 rounded">
            Learn More
          </button>
        </div>
      </div>
      <div className="content-right col-span-1">
        <img src="img/homePicture.png" alt="homePicture" />
      </div>
    </div>
  )
}

export default HomeTemplate