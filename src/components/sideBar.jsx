import React from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
const grid = 6;
const SideBar = ({ leftData, rightData, setRight }) => {
  return (
    <div className="grid col-span-3 rounded-md p-2 bg-white shadow-sm">
      <p className="py-2">click or drag the blocks to build workout</p>
      <hr className="my-2" />
      <Droppable droppableId="left" isDropDisabled={true}>
        {(provided) => (
          <div
            className="flex flex-wrap gap-4"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {leftData.map((item, index) => (
              <Draggable key={item} draggableId={`left-${item}`} index={index}>
                {(provided, snapshot) => (
                  <div
                    className="rounded-md w-28 h-24 flex flex-col-reverse bg-bg"
                    onClick={() => setRight([item, ...rightData])}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <div
                      style={{ height: `${Math.round(100 / item)}%` }}
                      className="w-full bg-fill-dark rounded-md"
                    />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default SideBar;
