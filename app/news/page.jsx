"use client";

import { useState } from "react";

const InfoPage = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const infoList = [
    {
      title: "Тэтгэвэр гэж юу вэ?",
      content: `
        <p>ТЭТГЭВЭР гэдэг нь нийгмийн даатгалын хууль тогтоомжид заасны дагуу өндөр насны, хөдөлмөрийн чадвар алдсаны, тэжээгчээ алдсаны тэтгэвэр авах эрх үүссэн даатгуулагч, хүнд сар бүр олгох мөнгөн хөрөнгийг хэлнэ.</p>
        
        <ul class="list-disc pl-5">
          <li>Өндөр насны тэтгэвэр</li>
          <li>Хөдөлмөрийн чадвар алдсаны тэтгэвэр</li>
          <li>Тэжээгчээ алдсаны тэтгэвэр</li>
        </ul>
      `,
    },
    {
      title: "Өндөр насны тэтгэвэр",
      content: `
        <p>Өндөр насны тэтгэвэр нь тэтгэврийн даатгалд даатгуулсан тэтгэвэр тогтоох насны болон шимтгэл төлөх хугацааны болзол хангасан иргэнд хөдөлмөрийн хөлсний орлогоос нь тодорхой хувь хэмжээгээр тооцож, тэтгэврийн даатгалын сангаас насан туршид нь амьжиргааны эх үүсвэр болгон сар бүр олгогдоно.</p>
        <p>Тэтгэвэр нь дараах онцлогтой. Үүнд:</p>
        <ul class="list-disc pl-5">
          <li>Амьжиргааны үндсэн эх үүсвэр;р</li>
          <li>Насан туршид нь олгогддог.</li>
        </ul>
        <h1>Өндөр насны тэтгэвэр авах эрх:</h1>
        <p>–Шимтгэл төлсөн байвал зохих хугацаа: 2024 онд – 21 жил 9 сар ба түүнээс дээш (цаашид жил бүр 3 сараар нэмэгдэж 2037 онд 25 жил болно)</p>
        <p>-Нас: <b> Өөрөө хүсвэл эрэгтэй 60 нас, эмэгтэй 55 нас </b></p>
        <p> Хэрэв даатгуулагч тэтгэврийн даатгалын шимтгэл төлсөн байвал зохих дээрх болзлыг хангаагүй тохиолдолд өндөр насны тэтгэврийг хувь тэнцүүлэн тогтоолгоно:</p>
        <p> -Шимтгэл төлсөн байвал зохих хугацаа:<b>10-19 жил</b></p>
        <p> Нас:<b> Төрсөн ондоо харгалзах насанд хүрсэн байна. </b></p>
     
     
        `,
    },

    {
      title: "Өндөр насны тэтгэвэр бодох арга:",
      content: `
        <p>Өндөр насны тэтгэвэр бодох арга дараах төрөлтэй байна:</p>
        <ul class="list-disc pl-5">
          <li>Цалинд үндэслэсэн</li>
          <li>Нэрийн дансны</li>
        </ul>
        <p>Өндөр насны тэтгэврийг даатгуулагч 1960 оны 01 дүгээр сарын 01-ний өдрөөс өмнө төрсөн бол цалинд үндэслэсэн, 1979 оны 01 дүгээр сарын 01-ний өдөр ба түүнээс хойш төрсөн бол нэрийн дансны аргаар тус тус бодно.</p>
        <p>1960 оны 01 дүгээр сарын 01-ний өдрөөс 1979 оны 01 дүгээр сарын 01-ний өдөр хүртэл хугацаанд төрсөн даатгуулагч, түүнчлэн олон хүүхэд төрүүлж, өсгөсөн эхийн болон хөдөлмөрийн хэвийн бус нөхцөлөөр тэтгэвэр тогтоолгох даатгуулагч цалинд үндэслэсэн болон нэрийн дансны аргаас өөрөө сонгоно.</p>
        <p><b>Өндөр насны тэтгэвэр бодох хувь хэмжээ:</b></p>
        <p>Өндөр насны тэтгэврийг даатгуулагчийн тэтгэврийн даатгалын шимтгэл төлсөн сүүлийн 20 жилийн доторх дараалсан 5 жилийн буюу 60 сарын цалин хөлс, түүнтэй адилтгах орлогын дунджаас 45 хувиар тогтооно. Тэтгэврийн даатгалын шимтгэлийг 20 жилээс илүү төлсөн жил тутамд дундаж цалингийн 1.5 хувиар, сар тутамд 0.125 хувиар, 2029 оны 01 дүгээр сарын 01-ний өдрөөс эхлэн шимтгэл төлсөн сар тутамд 0.167 хувиар тооцон тэтгэврийн хэмжээг нэмэгдүүлнэ.</p>
        <p>Тэтгэвэр тогтоолгосон боловч 12 сараас доошгүй хугацаанд ажил, хөдөлмөр эрхэлж, нийгмийн даатгалын шимтгэл төлсөн даатгуулагчийн авч байгаа тэтгэврийн хэмжээг анхны тэтгэвэр тогтоолгосон дундаж цалингаас 12 сар тутамд 1.5 хувиар бодож нэмэгдүүлэн тогтооно.</p>



        `,
    },
  ];

  return (
    <div className="flex flex-row h-screen p-10">
      <div className="w-1/4 bg-white p-4 mt-20">
        <div className="border-2 border-black rounded-lg">
          <h2 className="text-xl font-bold mb-4">Info Titles</h2>
          <ul>
            {infoList.map((info, index) => (
              <li
                key={index}
                className={`cursor-pointer hover:text-blue-500 ${
                  selectedInfo === info ? "bg-blue-200" : ""
                }`}
                onClick={() => setSelectedInfo(info)}
              >
                {info.title}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="w-3/4 bg-white p-4 mt-20">
        <div className="text-xl font-bold mb-4"></div>
        {selectedInfo ? (
          <div>
            <h3 className="text-lg font-bold mb-2">{selectedInfo.title}</h3>
            <div
              className="text-gray-800"
              dangerouslySetInnerHTML={{ __html: selectedInfo.content }}
            />
          </div>
        ) : (
          <p>Please select an info title</p>
        )}
      </div>
    </div>
  );
};

export default InfoPage;
