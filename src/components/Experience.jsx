import React from "react";

const Experience = () => {
  return (
    <div name="experience" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full">
        <div className="pb-8">
          <h2 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </h2>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Social Reverie | Project Assistant (2020-2023)</h3>
          <ul className="list-disc list-inside pl-4">
            <li className="text-lg">Developed client wireframe mockups for customized databases, increasing build efficiencies by 20%.</li>
            <li className="text-lg">Managed user acceptance testing prior to implementation, decreasing system errors and failures by 15% prior to full implementation.</li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">NYC Department Of Correction | Correctional Officer (2017-2020)</h3>
          <ul className="list-disc list-inside pl-4">
            <li className="text-lg">Led intake officer responsible for managing and broadening use cases for database management, reducing processing times by 30%.</li>
            <li className="text-lg">Coordinated rotating shift assignments for an intake unit consisting of 10+ officers, including communication of responsibilities and monitoring schedules.</li>
          </ul>
        </div>
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-2">Don Coqui Restaurant | Waiter/Bartender/Manager (2011-2017)</h3>
          <ul className="list-disc list-inside pl-4">
            <li className="text-lg">Oversaw a high-volume flagship location with monthly revenue of $60,000.</li>
            <li className="text-lg">Developed updated hiring, training, and management protocols resulting in a 20% higher retention rate than other regional locations.</li>
            <li className="text-lg">Created a positive customer experience by establishing strong communication with staff and patrons.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
