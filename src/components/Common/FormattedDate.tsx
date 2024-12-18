import { format, formatISO } from 'date-fns';

export default function FormattedDate({ date }: { date: string | Date }) {
  return (
    <time dateTime={formatISO(date, { representation: 'date' })}>
      {format(date, 'PPP')}
    </time>
  );
}
