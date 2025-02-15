import { format, formatISO } from "date-fns";

export default function Time({ datetime }: { datetime: string | Date }) {
  return (
    <time datetime={formatISO(datetime, { representation: "date" })}>
      {format(datetime, "PPP")}
    </time>
  );
}
