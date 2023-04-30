import React, { useEffect } from "react";


import { useParams } from "react-router-dom";
import dressUpData from "~/assets/data/dressupData";

const Tracker = () => {
  const { eventName } = useParams();
  if (!useParams) {
    return(null)
    }
  const singleEvent = dressUpData.find((item) => item.name === eventName);
  if (!singleEvent) {
    return(null)
    }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [singleEvent]);

  return (
    <div className="">
        <h2 className="">{singleEvent.name}</h2>
    </div>
  );
};

export default Tracker;