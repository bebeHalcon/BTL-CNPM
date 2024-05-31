
import { useState, useEffect } from 'react';

export const AdminPrinterTemplate = () => {

    const PrinterData = ({ header, data }) => {
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
                        <div key={cellIndex} style={{ flex: 1, padding: '14px'}}>
                        {cellIndex === 2 ? (
                          <select
                            value={cellData}
                            onChange={(e) => {
                              const newData = [...tableData];
                              newData[rowIndex][2] = e.target.value;
                              setTableData(newData);
                            }}
                          >
                            <option value="Hoạt động">Hoạt động</option>
                            <option value="Không hoạt động">Không hoạt động</option>
                          </select>
                        ) : (
                          cellData
                        )}
                      </div>
                      ))}
                  </div>
              ))}
          </div>
        );
    };
    
    const tableHeader = [['Tòa', 'Tên máy in', 'Tình trạng']];
    const [tableData, setTableData] = useState([
        ['A2', 'Canon LBP 3300', 'Hoạt động'],
        ['A2', 'HP LaserJetPro', 'Hoạt động'],
        ['A3', 'Epson EcoTank L3150', 'Hoạt động'],
        ['A3', 'Canon PIXMA', 'Hoạt động'],
        ['B1', 'Brother HL-L2380DW', 'Hoạt động'],
        ['B1', 'Samsung Xpress M2020W', 'Hoạt động'],
        ['B4', 'Dell Color Laser Printer', 'Hoạt động'],
        ['B4', 'Lexmark CX517de', 'Hoạt động'],
        ['B8', 'Xerox Phaser 6510', 'Hoạt động'],
        ['B8', 'HP Color LaserJet Pro MFP', 'Hoạt động'],
        ['C1', 'Epson WorkForce Pro', 'Hoạt động'],
        ['C1', 'Kyocera Ecosys', 'Hoạt động'],
        ['C2', 'HP OfficeJet Pro', 'Hoạt động'],
        ['C2', 'Canon MAXIFY', 'Hoạt động'],
        ['C5', 'Ricoh Aficio SP', 'Hoạt động'],
        ['C5', 'Lexmark CS517de', 'Hoạt động']
    ]);

    return (
      <div className="HistoryPrintTemplate grid grid-cols-1">
          <div className="col-span-1 ml-[50px] mr-[50px] py-10">
              <h1 className="text-[#009EE2] font-bold text-36 pb-20 pt-10">Tùy chỉnh máy in</h1>
              <PrinterData header={tableHeader} data={tableData} />
              <div className='flex items-center justify-end py-20'>
                <button className="bg-[#009EE2] text-white border-2 border-[#009EE2] hover:border-[#2e6780] hover:bg-[#2e6780] hover:text-white transition-all font-bold py-6 px-34 rounded">
                    Xác nhận
                </button>
            </div>
          </div>
      </div>
    )
}

export default AdminPrinterTemplate