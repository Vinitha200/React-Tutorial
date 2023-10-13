import React, { useState } from "react";
import Icon from "../JsonData/folder.png"

const DisplayFolder = ({ exploredata }) => {
  console.log("exportData", exploredata);
  

  return (
    <>
      <div style={{ marginTop: "5px" }}>
        {exploredata?.isFolder && <img src={Icon} style={{height:"15px"}}></img>}{exploredata?.name}</div>
      <div><span>
        {exploredata?.items?.map((item)=>{
            return(
                <div>
                    {item?.isFolder && <img src={Icon} style={{height:"15px"}}></img>}<span key={item?.id}>{item?.name}</span>
                    {item?.items?.map((item)=>{
                        return (
                            <div key={item?.id}>{item?.isFolder && <img src={Icon} style={{height:"15px"}}></img> }{item?.name}</div>
                        )
                    })}
                </div>
            )
        })}</span></div>
    </>
  );
};
export default DisplayFolder;
