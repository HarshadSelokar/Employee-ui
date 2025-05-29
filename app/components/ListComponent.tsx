import { useState } from "react";
import { MagnifyingGlassIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

const initialCountries = [
  { country: "India", code: "IN", order: "1", phLength: "10", pinLength: "6", isDefault: false },
  { country: "United States", code: "US", order: "2", phLength: "10", pinLength: "5", isDefault: false },
];

const initialStates = [
  { state: "Maharashtra", order: "1", isDefault: false },
  { state: "California", order: "2", isDefault: false },
];

const initialCities = [
  { city: "Nagpur", order: "1", pincode: "440001", isDefault: false },
  { city: "San Francisco", order: "2", pincode: "94103", isDefault: false },
];

const initialRegions = [
  { region: "Vidarbha", order: "1", pincode: "440001", isDefault: false },
  { region: "Bay Area", order: "2", pincode: "94103", isDefault: false },
];

interface ListComponentProps {
  title: string;
}

export default function ListComponent({ title }: ListComponentProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [isDefault, setIsDefault] = useState(false);

  const [inputs, setInputs] = useState<any>({
    country: "",
    code: "",
    order: "",
    phLength: "",
    pinLength: "",
    state: "",
    city: "",
    region: "",
    pincode: "",
  });

  const [items, setItems] = useState<any[]>(() => {
    switch (title) {
      case "Country":
        return initialCountries;
      case "State":
        return initialStates;
      case "City":
        return initialCities;
      case "Region":
        return initialRegions;
      default:
        return [];
    }
  });

  const handleInputChange = (field: string, value: string) => {
    setInputs({ ...inputs, [field]: value });
  };

  const handleAdd = () => {

    let requiredField = "";
    switch (title) {
      case "Country":
        requiredField = "country";
        break;
      case "State":
        requiredField = "state";
        break;
      case "City":
        requiredField = "city";
        break;
      case "Region":
        requiredField = "region";
        break;
      default:
        break;
    }

    // Check if the required field is empty
    if (!inputs[requiredField]) {
      alert(`${requiredField} is required!`);
      return;
    }

    let newItem;
    switch (title) {
      case "Country":
        newItem = {
          country: inputs.country,
          code: inputs.code,
          order: inputs.order,
          phLength: inputs.phLength,
          pinLength: inputs.pinLength,
          isDefault,
        };
        break;
      case "State":
        newItem = {
          state: inputs.state,
          order: inputs.order,
          isDefault,
        };
        break;
      case "City":
        newItem = {
          city: inputs.city,
          order: inputs.order,
          pincode: inputs.pincode,
          isDefault,
        };
        break;
      case "Region":
        newItem = {
          region: inputs.region,
          order: inputs.order,
          pincode: inputs.pincode,
          isDefault,
        };
        break;
      default:
        return;
    }
    setItems([...items, newItem]);
    handleReset();
  };

  const handleReset = () => {
    setInputs({
      country: "",
      code: "",
      order: "",
      phLength: "",
      pinLength: "",
      state: "",
      city: "",
      region: "",
      pincode: "",
    });
    setIsDefault(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };

  const filteredItems = items.filter((item) => {
    if (!searchTerm) return true;
    return Object.values(item)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  const renderFields = () => {
    switch (title) {
      case "Country":
        return ( 
            
          <div className="flex gap-1 mb-1">
            <div className="flex-1">
              <label className="text-xs">Country</label>
              <input
                value={inputs.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-[2rem]">
              <label className="text-xs">Code</label>
              <input
                value={inputs.code}
                onChange={(e) => handleInputChange("code", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-[2rem]">
              <label className="text-xs">Order</label>
              <input
                value={inputs.order}
                onChange={(e) => handleInputChange("order", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-16">
              <label className="text-xs">Ph# Length</label>
              <input
                value={inputs.phLength}
                onChange={(e) => handleInputChange("phLength", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-16">
              <label className="text-xs">Pin Length</label>
              <input
                value={inputs.pinLength}
                onChange={(e) => handleInputChange("pinLength", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
          </div>
        );
      case "State":
        return (
          <div className="flex gap-1 mb-1">
            <div className="flex-1">
              <label className="text-xs">State</label>
              <input
                value={inputs.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-16">
              <label className="text-xs">Order</label>
              <input
                value={inputs.order}
                onChange={(e) => handleInputChange("order", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
          </div>
        );
      case "City":
        return (
          <div className="flex gap-1 mb-1">
            <div className="flex-1">
              <label className="text-xs">City</label>
              <input
                value={inputs.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-16">
              <label className="text-xs">Order</label>
              <input
                value={inputs.order}
                onChange={(e) => handleInputChange("order", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-24">
              <label className="text-xs">Pincode</label>
              <input
                value={inputs.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
          </div>
        );
      case "Region":
        return (
          <div className="flex gap-1 mb-1">
            <div className="flex-1">
              <label className="text-xs">Region</label>
              <input
                value={inputs.region}
                onChange={(e) => handleInputChange("region", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-16">
              <label className="text-xs">Order</label>
              <input
                value={inputs.order}
                onChange={(e) => handleInputChange("order", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
            <div className="w-24">
              <label className="text-xs">Pincode</label>
              <input
                value={inputs.pincode}
                onChange={(e) => handleInputChange("pincode", e.target.value)}
                onKeyDown={handleKeyDown}
                className="border border-gray-300 rounded w-full p-1 text-xs"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const getFirstFieldValue = (item: any) => {
    switch (title) {
      case "Country":
        return item.country;
      case "State":
        return item.state;
      case "City":
        return item.city;
      case "Region":
        return item.region;
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col border border-gray-300 rounded w-full h-[90%]">
      <div className="flex justify-between items-center bg-[#4e6a7c] text-white text-xs font-bold p-1">
        <div>{title.toUpperCase()}</div>
        <Cog6ToothIcon className="w-4 h-4" />
      </div>

      <div className="p-1 flex flex-col gap-1 overflow-y-auto">
        {renderFields()}
        <div className="flex justify-between px-0.5">
          <div className="flex items-center gap-1 text-xs">
            <input
              type="checkbox"
              checked={isDefault}
              onChange={() => setIsDefault(!isDefault)}
            />
            <label>Is Default</label>
          </div>

          <div className="flex gap-1 mb-1">
            <button
              onClick={handleAdd}
              className="bg-[#428bca] text-white text-xs px-2 py-1 rounded"
            >
              Add
            </button>
            <button
              onClick={handleReset}
              className="bg-[#d3d3d3] text-xs px-2 py-1 rounded"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="relative mb-1">
          <input
            type="text"
            placeholder={`Search ${title}`}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded w-full p-1 text-xs pr-6"
          />
          <MagnifyingGlassIcon className="w-4 h-4 absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex flex-col gap-1 text-xs overflow-y-auto max-h-[40rem] border border-gray-300 rounded p-1">
          {filteredItems.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200 py-0.5">
              {getFirstFieldValue(item)}
            </div>
          ))}
          {filteredItems.length === 0 && (
            <div className="text-gray-400">No items found</div>
          )}
        </div>
      </div>
    </div>
  );
}
