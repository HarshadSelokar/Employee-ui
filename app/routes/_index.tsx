import ListComponent from "~/components/ListComponent";

export default function Index() {
  return (
    <div className="flex flex-col text-black md:flex-row gap-2 p-2 h-screen">
      <ListComponent title="Country" />
      <ListComponent title="State" />
      <ListComponent title="City" />
      <ListComponent title="Region" />
    </div>
  );  
}
