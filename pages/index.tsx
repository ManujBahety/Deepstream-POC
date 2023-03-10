import Chat from "@/components/Chat";
import Record from "@/components/Record";
import SendMessage from "@/components/SendMessage";
import { DeepstreamClient } from "@deepstream/client";

export default function HomePage() {
  const ds = new DeepstreamClient("localhost:6020");
  const client = ds.login();

  var myRecord = ds.record.getRecord("test/name");
  myRecord.set({
    firstName: "Manuj",
  });
  // ds.event.subscribe("event-data", (data: any) => {
  //   console.log(data);
  // });

  return (
    <>
      <Record myRecord={myRecord} />
      <SendMessage client={ds} />
      <Chat client={ds} />
    </>
  );
}
