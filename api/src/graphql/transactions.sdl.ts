export const schema = gql`
  type Transaction {
    id: String!
    title: String!
    value: Float!
    income: Boolean!
    createdAt: DateTime!
    updatedAt: DateTime!
    UserProfile: UserProfile!
    userProfileId: String!
  }

  type Query {
    transactions: [Transaction!]! @requireAuth
    transaction(id: String!): Transaction @requireAuth
  }

  input CreateTransactionInput {
    title: String!
    value: Float!
    income: Boolean!
    userProfileId: String!
  }

  input UpdateTransactionInput {
    title: String
    value: Float
    income: Boolean
    userProfileId: String
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
