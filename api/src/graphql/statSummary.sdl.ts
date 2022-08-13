export const schema = gql`
  type StatsSummary {
    pendingTransactions: Int!
    pendingTransactionsAmount: Float!
  }

  type Query {
    statsSummary: StatsSummary! @requireAuth
  }
`
