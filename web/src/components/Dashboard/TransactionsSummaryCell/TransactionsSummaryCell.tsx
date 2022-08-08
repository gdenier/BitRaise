import type {
  FindTransactionsSummaryQuery,
  FindTransactionsSummaryQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { TransactionsSummary } from '../TransactionsSummary/TransactionsSummary'

export const QUERY = gql`
  query FindTransactionsSummaryQuery {
    transactionsSummary: transactionsSummary {
      id
      title
      value
      income
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindTransactionsSummaryQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({
  transactionsSummary,
}: CellSuccessProps<
  FindTransactionsSummaryQuery,
  FindTransactionsSummaryQueryVariables
>) => {
  return <TransactionsSummary transactions={transactionsSummary} />
}
