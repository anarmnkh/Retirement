"use client";

import React, { useState } from "react";
import CSVReader from "react-csv-reader";
import YearsCheckboxes from "./YearsCheckboxes";

const SOCIAL_SECURITY_RATE = 0.135;
const PensionRate = 0.001875;
const Percentage = 0.45;
const Overtime = 0.00125;

const MAX_SALARIES = {
  2025: 4200000,
  2026: 4200000,
  2027: 4600000,
  2028: 5500000,
  2029: 4620000,
};

const MAX_SOCIALSECURITY = {
  2025: 567000,
  2026: 567000,
  2027: 621000,
  2028: 742500,
  2029: 623700,
};

const SalaryInfo = () => {
  const [salaries, setSalaries] = useState({
    2025: 0,
    2026: 0,
    2027: 0,
    2028: 0,
    2029: 0,
  });

  const [socialSecurityContributions, setSocialSecurityContributions] =
    useState({
      2025: 0,
      2026: 0,
      2027: 0,
      2028: 0,
      2029: 0,
    });

  const [totalMonthsOfSocialSecurity, setTotalMonthsOfSocialSecurity] =
    useState(0);
  const [averageSalary, setAverageSalary] = useState(0);
  const [pension, setPension] = useState(0);

  // Нийгмийн даатгалын шимтгэлийн хэмжээ
  const handleSalaryChange = (year, value) => {
    let updatedSalary = value;
    let SocialSecurity = value * SOCIAL_SECURITY_RATE;

    if (value > MAX_SALARIES[year]) {
      SocialSecurity = MAX_SOCIALSECURITY[year];
    }

    const updatedSalaries = { ...salaries, [year]: updatedSalary };
    const updatedSocialSecurityContributions = {
      ...socialSecurityContributions,
      [year]: SocialSecurity.toFixed(2),
    };
    setSalaries(updatedSalaries);
    setSocialSecurityContributions(updatedSocialSecurityContributions);

    // Calculate Average Salary
  };

  // csv, txt файл уншина
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return; // No file selected, do nothing
    }

    if (file.type === "text/csv") {
      // Handle CSV file
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const rows = content.split("\n");
        const updatedSalaries = {};
        rows.forEach((row) => {
          const [year, salary] = row.split(",");
          if (year && salary) {
            updatedSalaries[year.trim()] = parseFloat(salary.trim());
          }
        });
        setSalaries(updatedSalaries);
      };
      reader.readAsText(file);
    } else if (file.type === "text/plain") {
      // Handle TXT file
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = e.target.result;
        const rows = content.split("\n");
        const updatedSalaries = {};
        rows.forEach((row) => {
          const [year, salary] = row.split(",");
          if (year && salary) {
            updatedSalaries[year.trim()] = parseFloat(salary.trim());
          }
        });
        setSalaries(updatedSalaries);
      };
      reader.readAsText(file);
    } else {
      alert("Please upload a CSV or TXT file.");
      return;
    }
  };

  // Calculation handler
  const handleCalculate = () => {
    // Calculate Average Salary
    const totalSalaries = Object.values(salaries).reduce(
      (total, salary) => total + salary
    );
    const numYears = Object.keys(salaries).length;
    const newAverageSalary = totalSalaries / numYears;
    setAverageSalary(newAverageSalary);

    // Calculate Pension
    if (totalMonthsOfSocialSecurity < 241) {
      const calculatedPension = (
        newAverageSalary *
        PensionRate *
        totalMonthsOfSocialSecurity
      ).toFixed(2);
      setPension(calculatedPension);
    } else if (totalMonthsOfSocialSecurity === 241) {
      const calculatedPension = newAverageSalary * Percentage;
      setPension(calculatedPension);
    } else {
      const calculatedPension =
        newAverageSalary *
        (Percentage + (totalMonthsOfSocialSecurity - 240) * Overtime);
      setPension(calculatedPension.toFixed(2));
    }
  };

  return (
    <div className="bg-white mt-16 border-2 rounded-md">
      <div className="mx-8 py-4 rounded-md  bg-white">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Тэтгэвэр тогтоох
        </h2>
        <div>
          <label htmlFor="totalMonthsInput" className="block text-sm">
            Нийгмийн даатгал төлсөн нийт сарын тоо :
          </label>
          <input
            id="totalMonthsInput"
            type="number"
            value={totalMonthsOfSocialSecurity}
            onChange={(e) =>
              setTotalMonthsOfSocialSecurity(parseInt(e.target.value))
            }
            className="border border-gray-400 rounded-lg py-2 flex-2 w-98 focus:outline-none focus:ring focus:border-blue-500"
          />
        </div>

        <div className="mt-4">
          <label
            htmlFor="FileSelector"
            className="py-2 px-4 m border rounded-md cursor-pointer bg-gray-200 hover:bg-gray-300"
          >
            Choose File (*csv, txt)
          </label>
          <input
            type="file"
            accept=".csv, .txt"
            id="FileSelector"
            className="hidden"
            onChange={(event) => handleFileUpload(event)}
          />
        </div>

        <div className="w-full mt-2">
          <div className="flex item-center flex-row font-bold border-b border-gray-400">
            <div className="flex px-8 text-center py-2">Он</div>
            <div className="flex-1 text-center py-2">Жилийн дундаж цалин</div>
            <div className="flex-1 text-center py-2">
              Сайн дурын нийгмийн даатгалын шимтгэл
            </div>
          </div>
          {Object.entries(salaries).map(([year, salary]) => (
            <div
              key={year}
              className="flex flex-row items-center border-b border-gray-400"
            >
              <div className="flex text-center px-7 py-2 border border-gray-500 rounded-full">{year}</div>
              <div className="flex-1 py-2 px-4">
                <input
                  type="number"
                  value={salary}
                  onChange={(e) =>
                    handleSalaryChange(year, parseFloat(e.target.value))
                  }
                  className="border border-gray-500 rounded-full py-2 px-5 focus:outline-none focus:ring focus:border-blue-500 w-full"
                />
              </div>
              <div className="flex-1 py-2 px-4 border border-gray-500 rounded-full">
                {socialSecurityContributions[year]}
              </div>
            </div>
          ))}
        </div>

        <button
          className=" mt-2 w-full py-3 px-4 border-2 text-sm font-medium rounded-full text-black bg-white hover:bg-gray-300  hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 border-red-300"
          onClick={handleCalculate}
        >
          Тооцоолох
        </button>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-left">
            Дундаж цалин түүнтэй адилтгах орлого: {averageSalary.toFixed(2)}
          </h3>
          <h3 className="text-xl font-semibold text-lett">
            Тэтгэвэрийн хэмжээ: {pension}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default SalaryInfo;
