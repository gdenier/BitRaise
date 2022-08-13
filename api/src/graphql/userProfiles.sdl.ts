export const schema = gql`
  type UserProfile {
    id: String!
    supabaseUid: String!
    firstName: String
    lastName: String
    nickName: String
    isEarly: Boolean!
    balance: Float!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    userProfile: UserProfile @requireAuth
  }

  input CreateUserProfileInput {
    supabaseUid: String!
    firstName: String
    lastName: String
    nickName: String
    isEarly: Boolean
  }

  input UpdateUserProfileInput {
    firstName: String
    lastName: String
    nickName: String
  }

  type Mutation {
    createUserProfile(input: CreateUserProfileInput!): UserProfile! @requireAuth
    updateUserProfile(
      id: String!
      input: UpdateUserProfileInput!
    ): UserProfile! @requireAuth
    deleteUserProfile(id: String!): UserProfile! @requireAuth
  }
`
