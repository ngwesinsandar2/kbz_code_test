import { Cross2Icon } from "@radix-ui/react-icons"
// import { Table } from "@tanstack/react-table"

import { Button } from "../../components/ui/button"
import { Input } from "../../components/ui/input"
// import { DataTableViewOptions } from "@/app/examples/tasks/components/data-table-view-options"

// import { priorities, statuses } from "../data/data"
// import { DataTableFacetedFilter } from "./data-table-faceted-filter"

export function DataTableToolbar({
  table,
}) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between p-4 bg-[var(--fifth)]">
      <div className="flex flex-1 justify-between items-center space-x-2">
        <Input
          placeholder="Search..."
          value={(table.getColumn("name")?.getFilterValue()) ?? ""}
          onChange={(event) =>
            table.getColumn("name")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )}
        <Button
          variant="ghost"
          className="h-8 px-2 lg:px-3 bg-[var(--sixth)] text-white"
        >
          + Add Customer
        </Button>
      </div>
    </div>
  )
}