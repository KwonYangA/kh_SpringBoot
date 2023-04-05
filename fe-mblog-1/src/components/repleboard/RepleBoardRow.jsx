import React from "react";

const RepleBoardRow = ({ item }) => {
  return (
    <>
      <tr>
        <td>{item.QNA_BNO}</td>
        <td>{item.QNA_TITLE}</td>
        <td>{item.MEM_NAME}</td>
        <td>{item.QNA_DATE}</td>
        <td>{item.QNA_HIT}</td>
      </tr>
    </>
  );
};

export default RepleBoardRow;
