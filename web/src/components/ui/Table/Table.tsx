import { ReactElement } from 'react'

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'

import { classNames } from 'src/utils/style/classNames'

export interface TableProps<Model> {
  data: Model[]
  columns: ColumnDef<Model, any>[]
  grows?: ('fit' | number)[]
  header?: boolean
}

export const Table = <Model,>({
  data,
  columns,
  grows,
  header,
}: TableProps<Model>): ReactElement => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <ul className="flex w-full flex-col gap-[1px]">
      {header && (
        <header>
          {table.getHeaderGroups().map((headerGroup) => (
            <div
              key={headerGroup.id}
              className="mb-2 flex w-full gap-2 rounded-xl bg-neutral p-1 text-neutral-content"
            >
              {headerGroup.headers.map((header, index) => {
                const grow = grows[index]
                return (
                  <div
                    key={header.id}
                    style={{
                      flex:
                        typeof grow === 'number'
                          ? `${grow} ${grow} 0`
                          : `1 1 0`,
                    }}
                    className={classNames(
                      'flex overflow-hidden',
                      grow === 'fit' && 'max-w-fit'
                    )}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </div>
                )
              })}
            </div>
          ))}
        </header>
      )}
      {table.getRowModel().rows.map((row) => (
        <li
          key={row.id}
          className="list-row flex w-full items-center gap-2 rounded-xl p-2"
        >
          {row.getVisibleCells().map((cell, index) => {
            const grow = grows[index]
            return (
              <div
                key={cell.id}
                style={{
                  flex:
                    typeof grow === 'number' ? `${grow} ${grow} 0` : `1 1 0`,
                }}
                className={classNames(
                  'cell-table flex overflow-hidden',
                  grow === 'fit' && 'max-w-fit'
                )}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </div>
            )
          })}
        </li>
      ))}
    </ul>
  )
}
