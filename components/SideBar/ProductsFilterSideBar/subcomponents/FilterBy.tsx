import { Checkbox } from "@/components/ui/checkbox";

const FilterBy = ({
  title,
  data,
  onClick,
}: {
  title: string;
  data: { value: string; title: string; quantity: number }[];
  onClick?: (value: string) => void;
}) => {
  return (
    <div className=" flex flex-col gap-4 ">
      <span className=" text-base font-semibold text-grayscale-900">
        {title}
      </span>
      <div className=" flex flex-col gap-4">
        {data.map((e, i) => (
          <div className=" flex justify-between items-center" key={i}>
            <div className=" flex gap-2 items-center ">
              <Checkbox
                className=" bg-grayscale-500 border-none"
                onClick={
                  onClick
                    ? () => {
                        onClick(e.value);
                      }
                    : undefined
                }
              />
              <span className=" text-sm font-medium text-grayscale-900">
                {e.title}
              </span>
            </div>
            <span className=" text-xs font-medium text-grayscale-700">
              {e.quantity}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterBy;
