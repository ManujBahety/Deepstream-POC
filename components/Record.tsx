import { useState } from "react";

export default function Record(props: any) {
  const { myRecord } = props;
  const [firstName, setFirstName] = useState<string>("");

  myRecord.subscribe((value: any) => {
    setFirstName(value.firstName);
  });

  function handlechange(event: any) {
    setFirstName(event.target.value);
    myRecord.set("firstName", event.target.value);
  }
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">Name</h1>

      <div className="flex flex-col items-center p-2">
        <label>FirstName</label>
        <input
          id="firstName"
          className="border p-2 max-w-sm m-1"
          type="text"
          value={firstName}
          onChange={handlechange}
        />
      </div>
    </>
  );
}
