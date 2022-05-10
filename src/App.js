import React, { useState, useLayoutEffect } from "react";
import "./styles.css";

import Tree from "./Tree/Tree";

const structure = [
  {
    type: "folder",
    name: "CEO",
    files: [
      {
        type: "folder",
        name: "Head of Staff/HR",
        files: [
          {
            type: "folder",
            name: "Team Leader",
            files: [
              {
                type: "value",
                name: '{name:"aamir",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'
              }
            ]
          },
            {
              type: "folder",
              name: "Team Member",
              files: [{
                type: "value",
                name: '{name:"tanveer",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'
              }, {
                type: "value",
                name: '{name:"Rumana",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'
              }]
            },
        ]
      },
      {
        type: "folder",
        name: "Head of Engineering",
        files: [{
            type: "folder",
            name: "Team Leader",
            files: [{
              type: "value",
               name: '{name:"aamir",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'

            }]
          },
          {
            type: "folder",
            name: "Team Member",
          files: [{
            type: "value",
            name: '{name:"tanveer",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'
          }, {
            type: "value",
            name: '{name:"Rumana",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'
          }]
          },
        ]
      },
      {
        type: "folder",
        name: "Head of Design",
        files: [{
            type: "folder",
            name: "Team Leader",
            files: [{
              type: "value",
              name: '{name:"aamir",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'

            }]
          },
          {
            type: "folder",
            name: "Team Member",
           files: [{
             type: "value",
             name: '{name:"tanveer",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'
           }, {
             type: "value",
             name: '{name:"Rumana",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}'
           }]
          },
         
        ]
      },
     
      // { type: "value", name: '{name:"aamir",ID:"1",Phone:"9845632514",Email:"aamir@gmail.com"}' },
      // { type: "file", name: "setupTests.js" }
    ]
  },
  
  
];

export default function App() {
  let [data, setData] = useState(structure);

  const handleClick = (node) => {
    console.log(node);
  };
  const handleUpdate = (state) => {
    localStorage.setItem(
      "tree",
      JSON.stringify(state, function (key, value) {
        if (key === "parentNode" || key === "id") {
          return null;
        }
        return value;
      })
    );
  };

  useLayoutEffect(() => {
    try {
      let savedStructure = JSON.parse(localStorage.getItem("tree"));
      if (savedStructure) {
        setData(savedStructure);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <h2>Company Hierarchy </h2>

      <Tree data={data} onUpdate={handleUpdate} onNodeClick={handleClick} />

     
    </div>
  );
}
