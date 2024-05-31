import useFormContext from "../../../hooks/useFormContext"

export const Sidebar = () => {
  const {page} = useFormContext();
  const isActiveSide0 = page === 0;
  const isActiveSide1 = page === 1;
  const isActiveSide2 = page === 2;
  const isActiveSide3 = page === 3;
  return (
    <div className="h-screen bg-[#cde5ff] h-[540px] flex flex-col items-center gap-20">
        <div className={isActiveSide0 ? "bg-[#009EE2] mt-30 px-26 py-10 rounded-[10px]" : "px-26  mt-30 py-10 rounded-[10px]"}  >
            <h3 className={isActiveSide0 ? "font-bold text-white" : "font-bold"}>Bước 1</h3>
        </div>
        <div className={isActiveSide1 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  >
            <h3 className={isActiveSide1 ? "font-bold text-white" : "font-bold"}>Bước 2</h3>
        </div>
        <div className={isActiveSide2 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  >
            <h3 className={isActiveSide2 ? "font-bold text-white" : "font-bold"}>Bước 3</h3>
        </div>
        <div className={isActiveSide3 ? "bg-[#009EE2] px-26 py-10 rounded-[10px]" : "px-26 py-10 rounded-[10px]"}  >
            <h3 className={isActiveSide3 ? "font-bold text-white" : "font-bold"}>Bước 4</h3>
        </div>
    </div>
  )
}

export default Sidebar