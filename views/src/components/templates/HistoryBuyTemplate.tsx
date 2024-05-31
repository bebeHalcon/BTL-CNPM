// import { useNavigate } from 'react-router-dom'
// import { PATH } from 'constant/config';
import { useState, useEffect } from 'react';
// import axios from "axios";
// import Cookies from "universal-cookie";
// const cookies = new Cookies();
// const token = cookies.get("TOKEN");

const HistoryBuyData = ({ header, data }) => {
    return (
      <div className="flex flex-col w-full">
          {header.map((headerData, rowIndex) => (
              <div className="block mb-2 text-sm font-medium text-[#FFFFFF]" 
                  key={rowIndex} style={{ display: 'flex', width: '100%', border: '1px solid #000', backgroundColor: '#00B9E2', textAlign: 'center', fontSize: '16px' }}>
            
              {headerData.map((cellData, cellIndex) => (
                  <div key={cellIndex} style={{ flex: 1, padding: '15px' }}>
                      {cellData}
                  </div>
              ))}
          </div>
          ))}
  
  
          {data.map((rowData, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', width: '100%', border: '1px solid #ddd', textAlign: 'center' }}>
                  {rowData.map((cellData, cellIndex) => (
                      <div key={cellIndex} style={{ flex: 1, padding: '15px' }}>
                          {cellData}
                      </div>
                  ))}
              </div>
          ))}
      </div>
    );
};

const PageNumbers = ({ numPages, onPageClick }) => {
  const [clickedPage, setClickedPage] = useState(1);
  const [hoveredPage, setHoveredPage] = useState(null);

  const pageNumbers = Array.from({ length: numPages }, (_, index) => index + 1);

  const handleMouseEnter = (pageNumber) => {
      setHoveredPage(pageNumber);
  };

  const handleMouseLeave = () => {
      setHoveredPage(null);
  };

  const handleClick = (pageNumber) => {
    setClickedPage(pageNumber);
    onPageClick(pageNumber);
  };

  const getPageNumberStyle = (pageNumber) => ({
    margin: '0 8px',
    padding: '10px',
    cursor: 'pointer',
    backgroundColor: '#fff',
    color: clickedPage === pageNumber ? '#4200FF' : (hoveredPage === pageNumber ? '#4200FF' : '#000'),
    borderRadius: '5px',
    border: clickedPage === pageNumber ? '1px solid #4200FF' : (hoveredPage === pageNumber ? '1px solid #4200FF' : '1px solid #000'),
    width: '35px',
    height: '35px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  });

  return (
    <div className="flex justify-end mt-20">
      {pageNumbers.map((pageNumber) => (
        <div
          key={pageNumber}
          style={getPageNumberStyle(pageNumber)}
          onClick={() => handleClick(pageNumber)}
          onMouseEnter={() => handleMouseEnter(pageNumber)}
          onMouseLeave={handleMouseLeave}
        >
          {pageNumber}
        </div>
      ))}
    </div>
  );
};


export const HistoryBuyTemplate = () => {

    // const [BuyList, setBuyList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [numberOfPages, setNumberOfPages] = useState(1);
    const numberOfPages = 5;

    const tableHeader = [['Số thứ tự', 'Ngày và giờ', 'Loại giấy', 'Số lượng', 'Trạng thái']];
    const [tableData, setTableData] = useState([
      ['1', '28/11/2023 09:11 am', 'A3', '10', 'Hoàn thành'],
      ['2', '28/11/2023 09:11 am', 'A4', '10', 'Đang thực hiện'],
      ['3', '28/11/2023 09:11 am', 'A0', '10', 'Hoàn thành'],
    ]);

    const handlePageClick = (pageNumber) => {
      // axios.post("http://localhost:8080/api/history/admin/printings", {}, {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // })
      // .then((response) => {
      //   if (response.status === 200 && 'printHistory' in response.data) {
      //     const fetchedBuyList = JSON.parse(response.data.printHistory);
      //     setBuyList(fetchedBuyList);

      //     const calculatedNumberOfPages = Math.ceil(fetchedBuyList.length / 3);
      //     setNumberOfPages(calculatedNumberOfPages);

          const newData = generateDataForPage(pageNumber);
          setTableData(newData);
          setCurrentPage(pageNumber);
      //   }
      // })
      // .catch((error) => {
      //   console.error("Error!!!!!!", error);
      // });
    };
  
    const generateDataForPage = (pageNumber) => {
      const startIndex = (pageNumber - 1) * 3;
      if (startIndex == 0 || startIndex == 9)
        return [[`${startIndex + 1}`, '28/11/2023 09:11 am', 'A3', '10', 'Hoàn thành'],
                [`${startIndex + 2}`, '28/11/2023 10:11 am', 'A4', '20', 'Hoàn thành'],
                [`${startIndex + 3}`, '28/11/2023 11:11 am', 'A4', '5', 'Hoàn thành']]
      if (startIndex == 3 || startIndex == 12)
      return [[`${startIndex + 1}`, '28/11/2023 14:11 am', 'A3', '30', 'Hoàn thành'],
              [`${startIndex + 2}`, '28/11/2023 15:11 am', 'A3', '25', 'Hoàn thành'],
              [`${startIndex + 3}`, '28/11/2023 16:11 am', 'A3', '15', 'Hoàn thành']]
      if (startIndex == 6)
      return [[`${startIndex + 1}`, '28/11/2023 10:11 am', 'A4', '10', 'Hoàn thành'],
              [`${startIndex + 2}`, '28/11/2023 11:11 am', 'A4', '15', 'Hoàn thành'],
              [`${startIndex + 3}`, '28/11/2023 15:11 am', 'A3', '20', 'Hoàn thành']]
      // const endIndex = startIndex + 3;
      // return BuyList.slice(startIndex, endIndex).map((item, index) => [
      //   `${startIndex + index + 1}`,
      //   item.student_id,
      //   item.student_name,
      //   item.email,
      //   item.password,
      //   item.state
      // ]);
    };

    useEffect(() => {
      handlePageClick(1);
    }, []);

  return (
    <div className="HistoryPrintTemplate grid grid-cols-1">
        <div className="col-span-1 ml-[50px] mr-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Lịch sử mua giấy</h1>
            <HistoryBuyData header={tableHeader} data={tableData} />
            <PageNumbers numPages={numberOfPages} onPageClick={handlePageClick} />
        </div>
    </div>
  )
}

export default HistoryBuyTemplate