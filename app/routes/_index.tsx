import ListComponent from "~/components/ListComponent";
import { countries } from "~/data/data";

export default function Index() {
  return (
    <div className="p-4  text-black grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <ListComponent title="Country" items={countries} />
      <ListComponent title="State" items={[]} />
      <ListComponent title="City" items={[]} />
      <ListComponent title="Region" items={[]} />
    </div>
  );
}
