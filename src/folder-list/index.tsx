import React, { useEffect, useState } from "react";

const FolderList = () => {
  const [folder, setFolder] = useState<any[]>();

  const getData = async () => {
    fetch("http://localhost:3000/api/table", {
      method: "GET",
      mode: "cors",
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setFolder(
          res.map((item: string) => {
            return item.split(",");
          })
        );
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div>文件夹列表</div>
      <div>
        {folder &&
          folder.map((item, index) => {
            return (
              <div
                key={index}
                style={{ display: "flex", justifyContent: "space-between" }}
                onClick={() => {
                  window.open(
                    `http://localhost:3000/${item[1].replace("./", "")}`
                  );
                }}
              >
                <span>{item[0]}</span>
                <span>{item[1]}</span>
                <span>{item[2]}</span>
                <span>{item[3]}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default FolderList;
