import { ReactElement } from 'react'

import { createColumnHelper } from '@tanstack/react-table'
import { TransactionSummary } from 'types/graphql'

import { Link } from '@redwoodjs/router'

import { Table } from 'src/components/ui/Table/Table'
import { classNames } from 'src/utils/style/classNames'

import { MoneyReciveBrokenIcon } from '../../Icons/vuesax/broken/money-recive'
import { MoneySendBrokenIcon } from '../../Icons/vuesax/broken/money-send'
import { List } from '../../ui/List/List'

export interface TransactionsSummaryList {
  transactions: TransactionSummary[]
}

export const TransactionsSummaryList = ({
  transactions,
}: TransactionsSummaryList): ReactElement => {
  const columnHelper = createColumnHelper<TransactionSummary>()

  return (
    <Table
      data={transactions}
      grows={['fit', 2, 1, 'fit']}
      columns={[
        columnHelper.accessor((row) => row.income, {
          id: 'icon',
          header: () => null,
          size: 0,
          cell: (info) => (
            <div
              className={classNames(
                'w-fit rounded-xl p-2',
                info.getValue()
                  ? 'bg-success text-success-content'
                  : 'bg-error text-error-content'
              )}
            >
              {info.getValue() ? (
                <MoneyReciveBrokenIcon />
              ) : (
                <MoneySendBrokenIcon />
              )}
            </div>
          ),
        }),
        columnHelper.accessor('title', {
          id: 'title',
          header: 'title',
          cell: (info) => info.renderValue(),
        }),
        columnHelper.accessor('value', {
          id: 'value',
          header: 'amount',
          cell: (info) => (
            <p
              className={classNames(
                'text-xl font-bold',
                info.row.original.income ? 'text-success' : 'text-error'
              )}
            >
              {info.getValue().toLocaleString(navigator.language, {
                style: 'currency',
                currency: 'Eur',
              })}
            </p>
          ),
        }),
        columnHelper.accessor('id', {
          id: 'action',
          header: () => <p className="table-fit">actions</p>,
          cell: (_) => (
            <Link to="#" className="table-fit btn btn-primary">
              Voir
            </Link>
          ),
        }),
      ]}
    />
  )
}

export const TransactionsSummaryListOld = ({
  transactions,
}: TransactionsSummaryList): ReactElement => {
  return (
    <List.Wrapper>
      <List.Header headers={['', 'title', 'amount', 'Actions']} />
      {transactions.map((transaction) => (
        <List.Row key={transaction.id}>
          <List.Cell>
            <div
              className={classNames(
                'rounded-xl p-2',
                transaction.income
                  ? 'bg-success text-success-content'
                  : 'bg-error text-error-content'
              )}
            >
              {transaction.income ? (
                <MoneyReciveBrokenIcon />
              ) : (
                <MoneySendBrokenIcon />
              )}
            </div>
          </List.Cell>
          <List.Cell>{transaction.title}</List.Cell>
          <List.Cell>
            <p
              className={classNames(
                'text-xl font-bold',
                transaction.income ? 'text-success' : 'text-error'
              )}
            >
              {transaction.value}
            </p>
          </List.Cell>
          <List.Cell>
            <Link to="#" className="btn btn-primary">
              Voir
            </Link>
          </List.Cell>
        </List.Row>
      ))}
    </List.Wrapper>
  )
}
