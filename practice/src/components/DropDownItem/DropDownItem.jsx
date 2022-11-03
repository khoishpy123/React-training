import React from 'react';

function DropDownContent(dropdownId, setOpen) {
  console.log(dropdownId);
  return (
    <>
      <div className="wrapper">
        <li>Edit</li>
        <li>Delete</li>
      </div>
    </>
  );
}
export default DropDownContent;
