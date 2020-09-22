import React, { useState } from "react";
import List from "../List";

import Badge from '../Badge';


import './AddButtonList.scss';

const AddList = ({colors}) => {
  const [visiblePopup, setVisiblePopup] = useState(true);

  return (
    <div className='add-list'>
      <List
      onClick={() => setVisiblePopup(true)}
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="11"
                viewBox="0 0 32 32"
              >
                <title>plus</title>
                <path d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"></path>
              </svg>
            ),
            name: "Add List",
          },
        ]}
      />

      {visiblePopup && (
      <div className="add-list__popup">
        <input className='field' type="text" placeholder="Название списка"/>
        <div className="add-list__popup-colors">
          <ul>
            <li><Badge color='green' /></li>
            <li></li>
          </ul>
        </div>
        <button className='button'>Add</button>
      </div>)}

    </div>
  );
};

export default AddList;
