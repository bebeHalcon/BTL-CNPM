import { useState, useEffect } from 'react';
// import axios from "axios";
// import Cookies from "universal-cookie";

// const cookies = new Cookies();
// const token = cookies.get("TOKEN");

const FeedbackData = ({ header, data }) => {
    return (
      <div className="flex flex-col w-full">
          {header.map((headerData, rowIndex) => (
              <div className="block mb-2 text-sm font-medium text-[#FFFFFF]" 
                  key={rowIndex} style={{ display: 'flex', width: '100%', border: '1px solid #000', backgroundColor: '#00B9E2', textAlign: 'center', fontSize: '16px'}}>
            
              {headerData.map((cellData, cellIndex) => (
                  <div key={cellIndex} style={{ flex: 1, padding: '14px' }}>
                      {cellData}
                  </div>
              ))}
          </div>
          ))}
  
  
          {data.map((rowData, rowIndex) => (
              <div key={rowIndex} style={{ display: 'flex', width: '100%', border: '1px solid #ddd', textAlign: 'center' }}>
                  {rowData.map((cellData, cellIndex) => (
                      <div key={cellIndex} style={{ flex: 1, padding: '14px' }}>
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

export const AdminConfigTemplate = () => {

    // const [FeedbackList, setFeedbackList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    // const [numberOfPages, setNumberOfPages] = useState(1);
    const numberOfPages = 5;

    const tableHeader = [['Số thứ tự', 'MSSV', 'Ngày và giờ', 'Phản hồi', 'Mức độ']];
    const [tableData, setTableData] = useState([
      ['1', '2111111', '28/11/2023 09:11 am', 'Web dùng tạm ổn', '2'],
      ['2', '2111111', '28/11/2023 09:11 am', 'Web hay', '5'],
      ['3', '2111111', '28/11/2023 09:11 am', 'Cần điều chỉnh phần in ấn sao cho mượt hơn', '3'],
    ]);

    const handlePageClick = (pageNumber) => {
      // axios.post("http://localhost:8080/api/history/admin/printings", {}, {
      //   headers: {
      //     Authorization: `Bearer ${token}`
      //   }
      // })
      // .then((response) => {
      //   if (response.status === 200 && 'printHistory' in response.data) {
      //     const fetchedFeedbackList = JSON.parse(response.data.printHistory);
      //     // const tripledFeedbackList = Array.from({ length: 3 }, () => fetchedFeedbackList).flat();
      //     setFeedbackList(fetchedFeedbackList);

      //     const calculatedNumberOfPages = Math.ceil(fetchedFeedbackList.length / 3);
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
        return [[`${startIndex + 1}`, '2111111', '05/12/2023 09:11 am', 'Web dùng tạm ổn', '2'],
                [`${startIndex + 2}`, '2112256', '05/12/2023 10:32 am', 'Web hay', '5'],
                [`${startIndex + 3}`, '2113456', '05/12/2023 16:37 am', 'Cần điều chỉnh phần in ấn sao cho mượt hơn', '3']]
      if (startIndex == 3 || startIndex == 12)
        return [[`${startIndex + 1}`, '2234567', '05/12/2023 07:34 am', 'Dịch vụ rất chậm', '1'],
                [`${startIndex + 2}`, '2110001', '06/12/2023 08:59 am', '...', '2'],
                [`${startIndex + 3}`, '2312348', '06/12/2023 09:23 am', 'Web tạm ổn', '3']]
      if (startIndex == 6)
        return [[`${startIndex + 1}`, '2011232', '06/12/2023 09:19 am', 'Quá hay', '5'],
                [`${startIndex + 2}`, '2316648', '06/12/2023 09:47 am', 'Rất mượt', '5'],
                [`${startIndex + 3}`, '1922222', '06/12/2023 09:36 am', 'Web rất ổn', '5']]
      // const endIndex = startIndex + 3;
      // return FeedbackList.slice(startIndex, endIndex).map((item, index) => [
      //   `${startIndex + index + 1}`,
      //   item.student_id,
      //   item.student_name,
      //   item.email,
      //   item.password
      // ]);
    };

    useEffect(() => {
      handlePageClick(1);
    }, []);

    return (
    <div className="PrintOneTemplate grid grid-cols-1">
        <div className="left col-span-1 ml-[50px] mr-[50px] py-10">
            <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Các phản hồi</h1>
            <FeedbackData header={tableHeader} data={tableData} />
            <PageNumbers numPages={numberOfPages} onPageClick={handlePageClick} />
        </div>
    </div>
    )
}

export default AdminConfigTemplate