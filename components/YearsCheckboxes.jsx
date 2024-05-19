"use client"
import React, { useState } from "react";

const YearsCheckboxes = () => {
  const [years, setYears] = useState({
    2025: false,
    2026: false,
    2027: false,
    2028: false,
    2029: false,
  });

  const [selectedYearInfo, setSelectedYearInfo] = useState(null);

  // Define maximum and minimum wages for each year
  const wages = {
    2025: [
      { salary: 660000, contribution: 89000 },
      { salary: 700000, contribution: 94500 },
      { salary: 750000, contribution: 101250 },
      { salary: 800000, contribution: 108000 },
      { salary: 850000, contribution: 114750 },
      { salary: 900000, contribution: 121500 },
      { salary: 950000, contribution: 128200 },
      { salary: 1000000, contribution: 135000 },
      { salary: 1500000, contribution: 202500 },
      { salary: 2000000, contribution: 270000 },
      { salary: 2500000, contribution: 337500 },
      { salary: 3000000, contribution: 405000 },
      { salary: 3500000, contribution: 472500 },
      { salary: 4000000, contribution: 540000 },
    ],

    2026: [
      { salary: 660000, contribution: 89000 },
      { salary: 700000, contribution: 94500 },
      { salary: 750000, contribution: 101250 },
      { salary: 800000, contribution: 108000 },
      { salary: 850000, contribution: 114750 },
      { salary: 900000, contribution: 121500 },
      { salary: 950000, contribution: 128200 },
      { salary: 1000000, contribution: 135000 },
      { salary: 1500000, contribution: 202500 },
      { salary: 2000000, contribution: 270000 },
      { salary: 2500000, contribution: 337500 },
      { salary: 3000000, contribution: 405000 },
      { salary: 3500000, contribution: 472500 },
      { salary: 4000000, contribution: 540000 },
    ],
    2027: [
      { salary: 660000, contribution: 89000 },
      { salary: 700000, contribution: 94500 },
      { salary: 750000, contribution: 101250 },
      { salary: 800000, contribution: 108000 },
      { salary: 850000, contribution: 114750 },
      { salary: 900000, contribution: 121500 },
      { salary: 950000, contribution: 128200 },
      { salary: 1000000, contribution: 135000 },
      { salary: 1500000, contribution: 202500 },
      { salary: 2000000, contribution: 270000 },
      { salary: 2500000, contribution: 337500 },
      { salary: 3000000, contribution: 405000 },
      { salary: 3500000, contribution: 472500 },
      { salary: 4000000, contribution: 540000 },
    ],
    2028: [
      { salary: 660000, contribution: 89000 },
      { salary: 700000, contribution: 94500 },
      { salary: 750000, contribution: 101250 },
      { salary: 800000, contribution: 108000 },
      { salary: 850000, contribution: 114750 },
      { salary: 900000, contribution: 121500 },
      { salary: 950000, contribution: 128200 },
      { salary: 1000000, contribution: 135000 },
      { salary: 1500000, contribution: 202500 },
      { salary: 2000000, contribution: 270000 },
      { salary: 2500000, contribution: 337500 },
      { salary: 3000000, contribution: 405000 },
      { salary: 3500000, contribution: 472500 },
      { salary: 4000000, contribution: 540000 },
    ],
    2029: [
      { salary: 660000, contribution: 89000 },
      { salary: 700000, contribution: 94500 },
      { salary: 750000, contribution: 101250 },
      { salary: 800000, contribution: 108000 },
      { salary: 850000, contribution: 114750 },
      { salary: 900000, contribution: 121500 },
      { salary: 950000, contribution: 128200 },
      { salary: 1000000, contribution: 135000 },
      { salary: 1500000, contribution: 202500 },
      { salary: 2000000, contribution: 270000 },
      { salary: 2500000, contribution: 337500 },
      { salary: 3000000, contribution: 405000 },
      { salary: 3500000, contribution: 472500 },
      { salary: 4000000, contribution: 540000 },
    ],
  };

  const handleCheckboxChange = (year) => {
    setYears((prevYears) => {
      const updatedYears = { ...prevYears, [year]: !prevYears[year] };
      if (!updatedYears[year]) {
        setSelectedYearInfo(null); // Deselect the year if already selected
      } else {
        setSelectedYearInfo({ year, wages: wages[year] }); // Select the year and display its info
      }
      return updatedYears;
    });
  };

  return (
    <div className="container mx-auto py-2 rounded-md shadow-mde">
      <div className="flex flex-wrap justify-center items-center gap-4">
        {Object.keys(years).map((year) => (
          <div
            key={year}
            className="h-10 w-24 flex  justify-center  items-center border-2 border-gray-600 rounded-full hover:border-white"
          >
            <input
              type="checkbox"
              id={year}
              checked={years[year]}
              onChange={() => handleCheckboxChange(year)}
              className="form-checkbox h-3 w-3  mr-2"
            />
            <label htmlFor={year} className="ml-2 ">
              {year}
            </label>
          </div>
        ))}
      </div>
      {selectedYearInfo && (
        <div className="bg-white border-2 rounded-lg mt-4">
          <h3 className="text-lg font-bold mt-4 text-center">
            Сайн дурын даатглын төлбөрийн хэмжээ {selectedYearInfo.year} он
          </h3>
          <table className="w-full border-collapse  border-gray-400 mt-2">
            <thead>
              <tr>
                <th className="mx-2 border-2 rounded-lg border-gray-400 px-4 py-4 text-sm text-center">
                  Сайн дурын даатгуулчийн өөрөө мэдүүлсэн сарын орлого{" "}
                </th>
                <th className="border-2 border-gray-400  px-4 py-4 text-sm">
                  Сард төлвөл зохих шимтгэл{" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {selectedYearInfo.wages.map(({ salary, contribution }, index) => (
                <tr key={index}>
                  <td className="border-2 rounded-md border-gray-400 px-4 py-2">
                    <input
                      type="checkbox"
                      className="form-checkbox h-3 w-3 mr-2"
                    />
                    {salary}
                  </td>
                  <td className="border-2 border-gray-400 px-4 py-1">
                    {contribution}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default YearsCheckboxes;
