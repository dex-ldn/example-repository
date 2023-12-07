import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function MultiSelect({
  label,
  options,
  preSelected,
  name,
}: {
  label: string;
  options: string[];
  preSelected: string[];
  name: string;
}) {
  const [selected, setSelected] = useState<string[]>(preSelected);

  const addSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newSelection = event.target.value;
    // deselect
    if (selected.includes(newSelection)) {
      setSelected(
        selected.filter((listElement: string) => listElement !== newSelection)
      );
      // select
    } else {
      setSelected([...selected, newSelection]);
    }
  };

  return (
    <div>
      <h1 className="multiSelectLabel">{label}</h1>
      <select
        className="multiSelect"
        name={name}
        multiple
        value={selected}
        onChange={addSelection}
      >
        {options.map((option: string) => {
          return (
            <option key={uuidv4()} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}
