import { ReactElement } from 'react'

import { TransactionSummary } from 'types/graphql'

import { TransactionsSummaryList } from './TransactionsSummaryList'

export interface TransactionsSummaryProps {
  transactions: TransactionSummary[]
}

export const TransactionsSummary = ({
  transactions,
}: TransactionsSummaryProps): ReactElement => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-bold">Recent transactions</h2>
      <TransactionsSummaryList transactions={transactions} />
    </div>
  )
}
