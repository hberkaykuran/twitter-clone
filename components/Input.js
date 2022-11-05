import { CalendarIcon, ChartBarIcon, FaceSmileIcon, PhotoIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState, useRef } from "react";
import 'emoji-mart/css/emoji-mart.css';
import {Picker}from 'emoji-mart'

export default function Input() {
  const [input, setInput] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showEmojis, setShowEmojis] = useState(false);
  const filePickerReference = useRef(null);
  const addImageToPost = () => {};
  const addEmoji = (e) => {
    let symbol = e.unified.split("-");
    let codesArray = [];
    symbol.forEach((b) => codesArray.push("0x" + b));
    let emoji = String.fromCodePoint(...codesArray);
    setInput(input + emoji);
  };
  const sendPost = () =>{};
  return (
    <div
      className={`border-b border-gray-700 p-3 flex space-x-3 overflow-y-scroll`}
    >
      <img
        src="https://yt3.ggpht.com/ytc/AMLnZu8LG8qD3FhUFJayl6xP6ZUFj3RI3hVd-QqD94uYZ0nAn6kc4QyLroAPhX1JqcHE=s88-c-k-c0x00ffffff-no-rj-mo"
        alt=""
        className="h-11 w-11 rounded-full cursor-pointer"
      />
      <div className="w-full divide-y divide-gray-700">
        <div className={``}>
          <textarea
            value={input}
            rows="2"
            className="bg-transparent outline-none text-[#d9d9d9] text-lg placeholder-gray-500 tracking-wide w-full min-h-[50px]"
            placeholder="What's happening?"
            onChange={(e) => setInput(e.target.value)}
          />
          {selectedFile && (
            <div className="relative">
              <div
                className="absolute w-8 h-8 bg-[#15181c] hover:bg-[#272c26] bg-opacity-75 rounded-full flex items-center justify-center top-1 left-1 cursor-pointer"
                onClick={() => setSelectedFile(null)}
              >
                <XMarkIcon className="text-[#d9d9d9] h-5" />
                <img
                  src={selectedFile}
                  alt=""
                  className="rounded-2xl max-h-80 object-contain"
                />
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-2.5">
            <div className="flex items-center">
                <div className="icon" onClick={() => filePickerReference.current.click()}>
                    <PhotoIcon className="h-[22px] text-[#1d9bf0]"/>
                    <input type="file" hidden onChange={addImageToPost} ref={filePickerReference}/>
                </div>

                <div className="icon rotate-90">
                <ChartBarIcon className="text-[#1d9bf0] h-[22px]" />
                </div>

                <div className="icon" onClick={() =>setShowEmojis(!showEmojis)}>
                    <FaceSmileIcon className="text-[#1d9bf0] h-[22px]" />
                </div>

                <div className="icon">
                    <CalendarIcon className="text-[#1d9bf0] h-[22px]" />
                </div>
                {showEmojis && (
                    <Picker onSelect={addEmoji}
                      style={{
                        position:"absolute",
                        marginTop: "465px",
                        marginLeft: -40,
                        maxWidth: "320px",
                        borderRadius: "20px",
                      }}
                      theme="dark"
                      />
                )}
            </div>
            <button className="bg-[#1d9bf0] text-[#d9d9d9] rounded-full px-4 py-1.5 font-bold shadow-md hover:bg[#1a8cd8] disabled:hover:bg-[#1d9bf0] disabled:opacity-50 disabled:cursor-default"
            disabled={!input.trim() && !selectedFile}
            onClick={sendPost}>
              Tweet
            </button>
        </div>
      </div>
    </div>
  );
}
