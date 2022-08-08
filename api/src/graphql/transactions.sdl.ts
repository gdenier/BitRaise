export const schema = gql`
  type Transaction {
    id: String!
    title: String!
    value: Float!
    income: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type TransactionSummary {
    id: String!
    title: String!
    value: Float!
    income: Boolean!
  }

  type Query {
    transactions: [Transaction!]! @requireAuth
    transactionsSummary: [TransactionSummary!]! @requireAuth
    transaction(id: String!): Transaction @requireAuth
  }

  input CreateTransactionInput {
    title: String!
    value: Float!
    income: Boolean!
  }

  input UpdateTransactionInput {
    title: String
    value: Float
    income: Boolean
  }

  type Mutation {
    createTransaction(input: CreateTransactionInput!): Transaction! @requireAuth
    updateTransaction(
      id: String!
      input: UpdateTransactionInput!
    ): Transaction! @requireAuth
    deleteTransaction(id: String!): Transaction! @requireAuth
  }
`
