import { StatsSummary } from 'types/graphql'

import { useQuery } from '@redwoodjs/web'

import { WithLoading } from 'src/domain/WithLoading'

const QUERY_STATS_SUMMARY = gql`
  {
    statsSummary {
      pendingTransactions
      pendingTransactionsAmount
    }
  }
`

interface useStatsSummaryReturnValue extends WithLoading {
  stats: StatsSummary
}

export const useStatsSummary = (): useStatsSummaryReturnValue => {
  const response = useQuery(QUERY_STATS_SUMMARY)

  return { stats: response.data?.statsSummary, isLoading: response.loading }
}
