import React, { useState } from "react";

const RetirementAgeCalculator = () => {
  const [birthYear, setBirthYear] = useState("");
  const [gender, setGender] = useState("male");
  const [retirementAgeYears, setRetirementAgeYears] = useState(null);
  const [retirementAgeMonths, setRetirementAgeMonths] = useState(null);
  const [hasFourOrMoreChildren, setHasFourOrMoreChildren] = useState(false);

  const calculateRetirementAge = () => {
    const year = parseInt(birthYear);
    let retirementYears = null;
    let retirementMonths = null;

    if (gender === "male") {
      // Calculate retirement age for males
      if (year < 1957) {
        retirementYears = 60;
      } else if (year >= 1957 && year < 1977) {
        retirementYears = 60 + Math.floor((year - 1957) * 0.25);
        retirementMonths = Math.floor((year - 1957) * 0.25 * 12) % 12;
      } else if (year >= 1977) {
        retirementYears = 65;
      }
    } else if (gender === "female") {
      // Calculate retirement age for females
      if (year < 1962) {
        retirementYears = 55;
      } else if (year >= 1962 && year < 2002) {
        retirementYears = 55 + Math.floor((year - 1962) * 0.25);
        retirementMonths = Math.floor((year - 1962) * 0.25 * 12) % 12;
      } else if (year >= 2002) {
        retirementYears = 65;
      }

     
    }

    // Adjust retirement age if woman has four or more children
    if (gender === "female" && hasFourOrMoreChildren) {
      retirementYears -= 5;
    }

    setRetirementAgeYears(retirementYears);
    setRetirementAgeMonths(retirementMonths);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 p-10">
      <h2 className="text-3xl font-bold mt-4">Өндөр насны тэтгэвэр тогтоолгох нас</h2>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mb-4 mt-4">
        <label htmlFor="birthYear" className="block text-lg font-semibold mb-2">
          Төрсөн он:
        </label>
        <input
          type="number"
          id="birthYear"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          value={birthYear}
          onChange={(e) => setBirthYear(e.target.value)}
        />
        <label htmlFor="gender" className="block text-lg font-semibold mt-4 mb-2">
          Хүйс:
        </label>
        <select
          id="gender"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">Эрэгтэй</option>
          <option value="female">Эмэгтэй</option>
        </select>
        {gender === "female" && (
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              id="children"
              className="mr-2"
              checked={hasFourOrMoreChildren}
              onChange={() => setHasFourOrMoreChildren(!hasFourOrMoreChildren)}
            />
            <label htmlFor="children">4 болон түүнээс дээш хүүхэдтэй.</label>
          </div>
        )}
        <button
          className="w-full mt-6 px-4 py-2 bg-white text-black font-semibold rounded-md focus:outline-none focus:bg-red-600"
          onClick={calculateRetirementAge}
        >
          Тооцоолох
        </button>
        {retirementAgeYears !== null && (
          <p className="text-lg font-semibold mt-6">
            Та өөрөө хүсюэл {retirementAgeYears} нас {retirementAgeMonths || 0} сартай тэтгэвэрт гарах боломжтой.
          </p>
        )}
      </div>
    </div>
  );
};

export default RetirementAgeCalculator;
