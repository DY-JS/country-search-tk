import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import CountryItem from "../CountryItem";
import { Info, ListContainer } from "./StyledComponents";

const CountryList = () => {
  const { countryList, fixedList, status, error } = useSelector(
    (state) => state.countries
  );
  const query = useSelector((state) => state.query.query);

  const [currentList, setCurrentList] = useState([...fixedList]);

  const handleOnDragEnd = (result) => {
    if (
      !result.destination ||
      result.destination.index === result.source.index
    ) {
      return;
    }

    const items = Array.from(currentList);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCurrentList(items);
  };

  useEffect(() => {
    if (query) {
      setCurrentList([
        ...fixedList,
        ...countryList.filter(
          (country) =>
            country.name.toLowerCase().includes(query.toLowerCase()) &&
            fixedList.every((c) => c.name !== country.name)
        ),
      ]);
    } else setCurrentList([...fixedList]);
  }, [query, countryList]);

  return (
    <>
      {status === "loading" && <Info>Loading...</Info>}
      {error && <Info>{error}</Info>}
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="currentList">
          {(provided) => (
            <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
              {currentList.map((country, index) => {
                return (
                  <Draggable
                    key={country.name + index}
                    draggableId={country.name + index}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        onDragOver={(e) => e.preventDefault()}
                        onDragEnter={(e) => e.preventDefault()}
                        onDragLeave={(e) => e.preventDefault()}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <CountryItem country={country} />
                      </div>
                    )}
                  </Draggable>
                );
              })}
            </ListContainer>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default CountryList;
