import type { QueryResolvers, MutationResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const transactions: QueryResolvers['transactions'] = async () => {
  const profile = await db.userProfile.findUnique({
    where: { supabaseUid: context.currentUser.sub },
  })
  return await db.transaction.findMany({
    where: { UserProfile: profile },
    orderBy: { createdAt: 'desc' },
  })
}

export const transactionsSummary: QueryResolvers['transactionsSummary'] =
  async () => {
    const profile = await db.userProfile.findUnique({
      where: { supabaseUid: context.currentUser.sub },
    })
    return await db.transaction.findMany({
      where: { UserProfile: profile },
      orderBy: { createdAt: 'desc' },
      take: 5,
    })
  }

export const transaction: QueryResolvers['transaction'] = ({ id }) => {
  return db.transaction.findUnique({
    where: { id },
  })
}

export const createTransaction: MutationResolvers['createTransaction'] =
  async ({ input }) => {
    const profile = await db.userProfile.findUnique({
      where: { supabaseUid: context.currentUser.sub },
    })

    return await db.transaction.create({
      data: { ...input, userProfileId: profile.id },
    })
  }

export const updateTransaction: MutationResolvers['updateTransaction'] = ({
  id,
  input,
}) => {
  return db.transaction.update({
    data: input,
    where: { id },
  })
}

export const deleteTransaction: MutationResolvers['deleteTransaction'] = ({
  id,
}) => {
  return db.transaction.delete({
    where: { id },
  })
}
