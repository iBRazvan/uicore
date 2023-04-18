import React, { useState, useEffect } from "react";
import { Multiselect } from "multiselect-react-dropdown";

const Form = ({ postData = {}, setPostData, handleSave }) => {
  const option = [
    { name: "Source 1", id: 1 },
    { name: "Source 2", id: 2 },
    { name: "Source 3", id: 3 },
    { name: "Source 4", id: 4 },
  ];

  const [options] = React.useState(option);

  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (postData.source) {
      setSelectedOptions(postData.source);
    }
  }, [postData]);

  return (
    <div className="flex flex-col items-center md:max-w-[500px] sm:max-w-[250px] sm:p-5 p-5 border rounded-md">
      <form autoComplete="off" noValidate onSubmit={handleSave}>
        <div className="flex w-full flex-row justify-between border-b pb-2 items-center">
          <h3>General</h3>
          <button
            type="submit"
            className="border-2 border-white p-1 rounded-md hover:bg-white hover:text-black font-medium"
          >
            Save
          </button>
        </div>
        <div className="flex w-full flex-col  py-2 gap-2 items-start">
          <h3>Name</h3>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={postData?.username}
            onChange={(e) =>
              setPostData({ ...postData, username: e.target.value })
            }
            className="w-full bg-black border border-gray-400 p-1 rounded-md items-center focus:border-white focus:border-2"
          />
        </div>
        <div className="flex flex-row gap-2 w-full justify-start">
          <div className="flex w-full flex-col  py-2 gap-2 items-start">
            <h3>Access</h3>
            <select
              onChange={(e) =>
                setPostData({ ...postData, access: e.target.value })
              }
              name="access"
              value={postData?.access}
              id="access"
              className="w-full bg-black border border-gray-400 p-1 rounded-md items-center focus:border-white focus:border-2"
            >
              <option disabled="disabled" selected="selected">
                Select Access
              </option>
              <optgroup label="Type of access">
                <option value="Public">Public</option>
                <option value="Private">Private</option>
              </optgroup>
            </select>
          </div>
          <div className="flex w-full flex-col  py-2 gap-2 items-start">
            <h3>Purpose</h3>
            <select
              onChange={(e) =>
                setPostData({ ...postData, purpose: e.target.value })
              }
              name="purpose"
              value={postData?.purpose}
              id="purpose"
              className="w-full bg-black border border-gray-400 p-1 rounded-md items-center focus:border-white focus:border-2"
            >
              <option disabled="disabled" selected="selected">
                Select Purpose
              </option>
              <optgroup label="Purpose">
                <option value="Support Agent">Support Agent</option>
                <option value="Customer Agent">Customer Agent</option>
                <option value="Visitor">Visitor</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full justify-start">
          <div className="flex w-full flex-col  py-2 gap-2 items-start">
            <h3>Mode</h3>
            <select
              onChange={(e) =>
                setPostData({ ...postData, mode: e.target.value })
              }
              name="mode"
              id="mode"
              value={postData?.mode}
              className="w-full bg-black border border-gray-400 p-1 rounded-md items-center focus:border-white focus:border-2"
            >
              <option disabled="disabled" selected="selected">
                Select Mode
              </option>
              <optgroup label="Mode:">
                <option value="Chat">Chat</option>
                <option value="Call">Call</option>
              </optgroup>
            </select>
          </div>
          <div className="flex w-full flex-col  py-2 gap-2 items-start">
            <h3>Reference</h3>
            <select
              onChange={(e) =>
                setPostData({ ...postData, reference: e.target.value })
              }
              name="reference"
              value={postData?.reference}
              id="reference"
              className="w-full bg-black border border-gray-400 p-1 rounded-md items-center focus:border-white focus:border-2"
            >
              <optgroup label="Reference">
                <option disabled="disabled" selected="selected">
                  Select Reference
                </option>
                <option value="Include as link">Include as link</option>
                <option value="Direct Message">Direct Message</option>
                <option value="Invite via link">Invite via link</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className="flex flex-row gap-2 w-full align-middle">
          <div className="flex w-full flex-col  py-2 gap-2 items-start">
            <h3>Limit chat to x messagess</h3>
            <select
              onChange={(e) =>
                setPostData({ ...postData, limit: e.target.value })
              }
              name="limit"
              value={postData?.limit}
              id="limit"
              className="w-full bg-black border border-gray-400 p-1 rounded-md items-center focus:border-white focus:border-2"
            >
              <option disabled="disabled" selected="selected">
                Select Limit
              </option>
              <optgroup label="Limit chat to: ">
                <option value="10">10</option>
                <option value="30">30</option>
                <option value="Unlimited">Unlimited</option>
              </optgroup>
            </select>
          </div>
          <div className="flex w-full flex-col  py-2 gap-2 justify-between ">
            <h3>Context size</h3>
            <select
              onChange={(e) =>
                setPostData({ ...postData, context: e.target.value })
              }
              name="size"
              value={postData?.context}
              id="size"
              className="w-full bg-black border border-gray-400 p-1 rounded-md items-center focus:border-white focus:border-2"
            >
              <option disabled="disabled" selected="selected">
                Select Context Size
              </option>
              <optgroup label="Context size">
                <option value="Small">Small</option>
                <option value="Medium">Medium</option>
                <option value="Big">Big</option>
              </optgroup>
            </select>
          </div>
        </div>
        <div className="flex w-full flex-col py-2 gap-2 ">
          <h3>Sources</h3>
          <Multiselect
            style={{
              multiselectContainer: {
                alignItems: "center",
                textAlign: "center",
              },
              searchBox: {
                alignItems: "center",
                textAlign: "center",
                padding: "0.5rem",
              },
              inputField: {
                border: "none",
              },
              chips: {
                background: "rgba(191, 13, 0, 0.4)",
              },
              option: {
                background: "rgba(191, 13, 0, 0.4)",
                textAlign: "center",
                margin: "0.5rem",
              },
            }}
            selectedValues={selectedOptions}
            options={options}
            displayValue="name"
            onSelect={(selectedItem) =>
              setPostData({ ...postData, source: selectedItem })
            }
          />
        </div>
      </form>
    </div>
  );
};

export default Form;
