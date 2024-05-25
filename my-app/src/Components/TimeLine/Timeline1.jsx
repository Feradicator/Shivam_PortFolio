import React, { Fragment } from "react";
import Circle from "./Circle";
import EventCard from "./EventCard";
import Pillar from "./Pillar";

const TimeLine = ({ events }) => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <h1 className="my-20 text-center text-4xl">TimeLine</h1>
      <div className="flex flex-col gap-y-3 w-full my-4">
        {events.map((event, key) => {
          return (
            <Fragment key={key}>
              <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 items-center mx-auto">
               
               
               
                  {event.direction === "left" && (
                    <div className="flex justify-end">
                        <EventCard
                      heading={event.heading}
                      subHeading={event.subHeading}
                    />
                        </div>
                    
                  )}
                    {key < events.length && <Circle />}

               
                  {event.direction === "right" && (
                    <div className="flex justify-start">
                         <EventCard
                      heading={event.heading}
                      subHeading={event.subHeading}
                    />
                        </div>
                   
                  )}
                

                <Pillar />
              </div>
              
            </Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default TimeLine;
