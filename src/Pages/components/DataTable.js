import React from "react";

const DataTable = ({ data }) => {
  return (
    <div className="w-full border  rounded h-full">
      <table className="w-full">
        <thead>
          <tr className="bg-sky-100 rounded border-b border-gray-500">
            <th className="py-4 text-left pl-8">Sr.</th>
            <th className="py-4 text-left pl-8">Date</th>
            <th className="py-4 text-left pl-8">Count Down</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr className="border-b border-gray-500">
                <td className="py-3 text-left pl-8">{index + 1}</td>
                <td className="py-4 text-left pl-8">
                  {new Date(item.date).toLocaleString()}
                </td>
                <td className="py-4 text-left pl-8">
                  {item.seconds.toFixed(2)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
