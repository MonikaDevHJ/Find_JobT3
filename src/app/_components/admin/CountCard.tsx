import React from "react";
import { Eye } from "lucide-react";

type CountcardProps = {
  title: string;
  count: number;
  loading?: boolean;
  onView?:() => void;
};

const CountCard: React.FC<CountcardProps> = ({
  title,
  count,
  loading = false, onView
}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex items-center justify-between">
        <p className="text-xl font-semibold text-gray-800">{title}</p>
        <Eye
          onClick={onView}
          className="cursor-pointer text-fuchsia-700 transition hover:text-fuchsia-500"
          size={26}
        />
      </div>

      <div className="mt-4">
        {loading ? (
          <div>
            <p className="mb-2 text-sm text-gray-500">Fetching data...</p>
            <div className="h-10 w-28 animate-pulse rounded bg-gray-200"></div>
          </div>
        ) : (
          <p className="text-5xl font-extrabold tracking-wide text-fuchsia-700">
            {count}
          </p>
        )}
      </div>
    </div>
  );
};

export default CountCard;
