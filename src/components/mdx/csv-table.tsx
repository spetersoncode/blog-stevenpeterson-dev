import React from "react";
import papaparse from "papaparse";

const { parse } = papaparse;

interface CSVTableProps {
  data: string;
}

const CSVTable: React.FC<CSVTableProps> = ({ data }) => {
  const parseResult = parse(data, { skipEmptyLines: true, header: false });
  const rows = parseResult.data;

  if (rows.length === 0) {
    return <p>No data</p>;
  }

  const headerRow = rows[0] as string[];
  const dataRows = rows.slice(1) as string[][];

  return (
    <table>
      <thead>
        <tr>
          {headerRow.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataRows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CSVTable;
