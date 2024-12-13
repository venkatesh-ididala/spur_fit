import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";

const Display = ({ rightData, setRight }) => {
  return (
    <div className="grid col-span-9 rounded-md p-2 bg-white shadow-sm">
      <Droppable droppableId="right" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className="relative flex overflow-x-scroll"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {rightData.map((item, index) => (
              <Draggable
                key={`right-${index}`}
                draggableId={`right-${index}`}
                index={index}
              >
                {(provided, snapshot) => (
                  <div
                    className="w-28 flex flex-col-reverse ml-0.5"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div
                      style={{ height: `${Math.round(100/item)}%` }}
                      className="w-full bg-fill-dark"
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
            <span
              className="absolute z-10 top-1 right-1 p-1 bg-bg rounded cursor-pointer text-sm text-gray-400"
              onClick={() => setRight([])}
            >
              Clear Blocks
            </span>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Display;
