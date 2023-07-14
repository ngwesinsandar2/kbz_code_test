import { Checkbox } from "../../../../components/ui/checkbox"

export const columns = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
  },
  {
    accessorKey: "id",
    header: "#",
  },
  {
    accessorKey: "name",
    header: "NAME",
  },
  {
    accessorKey: "address",
    header: "ADDRESS",
  },
  {
    accessorKey: "nrc",
    header: "NRC",
  },
  {
    accessorKey: "email",
    header: "EMAIL",
  },
  {
    accessorKey: "mobile_number",
    header: "MOBILE NUMBER",
  },
]