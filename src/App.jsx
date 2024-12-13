import React, { useState } from "react";
import SideBar from "./components/sideBar";
import Header from "./components/header";
import Display from "./components/display";
import { DragDropContext } from "react-beautiful-dnd";
import Details from "./components/details";

const App = () => {
  const left = [1, 1.2, 2, 3, 4, 5];
  // const left = [
  //   { height: 100, w: 1, name: "WarmUp" },
  //   { height: 75, w: 2, name: "Active" },
  //   { height: 50, w: 3, name: "Active" },
  //   { height: 30, w: 3, name: "WarmUp" },
  //   { height: 40, w: 1, name: "Active" },
  // ];
  const [right, setRight] = useState([]);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) return;

    if (source.droppableId === "left" && destination.droppableId === "right") {
      const newItem = left[source.index];
      const updatedRightContainers = Array.from(right);
      updatedRightContainers.splice(destination.index, 0, newItem); // Insert at the dropped position
      setRight(updatedRightContainers);
    } else if (
      source.droppableId === "right" &&
      destination.droppableId === "right"
    ) {
      const result = [...right];
      const [removed] = result.splice(source.index, 1);
      result.splice(destination.index, 0, removed);
      setRight(result);
    }
  };

  return (
    <div className="bg-bg">
      <div className="container mx-auto flex flex-col gap-4">
        <Header />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-12 gap-4 w-full">
            <SideBar leftData={left} rightData={right} setRight={setRight} />
            <Display rightData={right} setRight={setRight} />
            <div className="col-span-3" />
            <Details rightData={right} />
          </div>
        </DragDropContext>
      </div>
    </div>
  );
};

export default App;
