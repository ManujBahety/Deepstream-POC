import { useState } from "react";
import Chat from "./Chat";

export default function SendMessage(props: any) {
  const { client } = props;
  const [value, setValue] = useState("");

  function handleClick(e: any) {
    client.event.emit("event-data", value);
    setValue("");
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold underline text-center">Chat</h1>
      <div className="flex flex-col items-center p-2">
        <label>Message</label>
        <input
          id="firstName"
          className="border p-2 max-w-sm m-1"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button onClick={handleClick} className="  p-2 border">
        Send Message
      </button>
    </div>
  );
}
