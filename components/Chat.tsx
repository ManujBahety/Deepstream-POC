import { useState } from "react";

export default function Chat(props: any) {
  const { client } = props;
  const [events, setEvents] = useState<any>([]);

  // (data: any) => {
  //   setEvents((prevEvents: any) => [...prevEvents, data]);
  // }
  client.event.subscribe(
    "event-data",
    // (data: any) => {
    //   setEvents((prevEvents: any) => [...prevEvents, data]);
    // }
    (data: any) => {
      console.log(data);
    }
  );
  return (
    <div className="text-center">
      <p>Messages</p>
      {events.map((event: any) => {
        return (
          <div className="p-2 border rounded-md" key={event}>
            {event}
          </div>
        );
      })}
    </div>
  );
}
