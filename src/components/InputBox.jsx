// import React from 'react'

import { Input } from "@nextui-org/input";
import { SearchIcon } from "./SearchIcon";
// import { Button } from "@nextui-org/react";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

export const InputBox = () => {
  const [word, setWord] = useState("");

  const navigate = useNavigate()
  return (
    <>
      <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focus=true]:bg-default-200/50",
            "dark:group-data-[focus=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Enter word..."
        onChange={(e) => {
          setWord(e.target.value)
        }}
        startContent={
          <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        }
      />
      <button type="button"
      onClick={() => {
        navigate(`/dictionary/${word}`)
      }} className="text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Search</button>
    </>
  );
};
