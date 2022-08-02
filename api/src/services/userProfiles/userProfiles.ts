import type {
  QueryResolvers,
  MutationResolvers,
  UserProfile,
} from 'types/graphql'

import { db } from 'src/lib/db'

export const userProfile: QueryResolvers['userProfile'] = async () => {
  const supabaseUid = context.currentUser?.sub as string
  return db.userProfile.findUnique({
    where: { supabaseUid },
  }) as unknown as Promise<UserProfile>
}

export const createUserProfile: MutationResolvers['createUserProfile'] = ({
  input,
}) => {
  return db.userProfile.create({
    data: input,
  }) as unknown as Promise<UserProfile>
}

export const updateUserProfile: MutationResolvers['updateUserProfile'] = ({
  id,
  input,
}) => {
  return db.userProfile.update({
    data: input,
    where: { id },
  }) as unknown as Promise<UserProfile>
}

export const deleteUserProfile: MutationResolvers['deleteUserProfile'] = ({
  id,
}) => {
  return db.userProfile.delete({
    where: { id },
  }) as unknown as Promise<UserProfile>
}
