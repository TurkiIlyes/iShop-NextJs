import { Row } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";

const DataTableContentCheckBox = <T,>({ row }: { row: Row<T> }) => {
  return (
    <Checkbox
      checked={row.getIsSelected()}
      onCheckedChange={(value) => row.toggleSelected(!!value)}
      aria-label="Select row"
    />
  );
};

export default DataTableContentCheckBox;
