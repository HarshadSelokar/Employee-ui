import { useState } from "react";
import type { ListItem } from "~/data/data";

interface ListComponentProps {
  title: string;
  items: ListItem[];
}

export default function ListComponent({ title, items }: ListComponentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [listItems, setListItems] = useState(items);
  const [newItem, setNewItem] = useState("");

  // Filtered items
  const filteredItems = listItems.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAdd = () => {
    if (newItem.trim()) {
      setListItems([...listItems, { name: newItem }]);
      setNewItem("");
    }
  };

  const handleReset = () => {
    setSearchTerm("");
    setNewItem("");
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded p-2 m-1 w-full">
      <div className="flex justify-between mb-1">
        <div className="font-semibold">{title.toUpperCase()}</div>
      </div>

      <div className="flex flex-col gap-1 mb-1">
        <input
          type="text"
          placeholder={title}
          className="border border-gray-300 rounded p-1 text-sm"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <div className="flex gap-1">
          <input
            type="text"
            placeholder="Order"
            className="border border-gray-300 rounded p-1 text-sm w-full"
          />
          <input
            type="text"
            placeholder="Pincode"
            className="border border-gray-300 rounded p-1 text-sm w-full"
          />
        </div>
        <div className="flex items-center gap-1">
          <input type="checkbox" />
          <label className="text-xs">Is Default</label>
        </div>
        <div className="flex gap-1">
          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white text-xs px-2 py-1 rounded"
          >
            Add
          </button>
          <button
            onClick={handleReset}
            className="bg-gray-300 text-xs px-2 py-1 rounded"
          >
            Reset
          </button>
        </div>
      </div>

      <input
        type="text"
        placeholder={`Search ${title}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border border-gray-300 rounded p-1 text-sm mb-1"
      />

      <div className="border border-gray-300 h-48 overflow-y-auto text-sm">
        {filteredItems.map((item, idx) => (
          <div key={idx} className="p-1 border-b border-gray-200">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
