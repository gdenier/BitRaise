import type { QueryResolvers } from 'types/graphql'

import { db } from 'src/lib/db'

export const statsSummary: QueryResolvers['statsSummary'] = async () => {
  const profile = await db.userProfile.findUnique({
    where: { supabaseUid: context.currentUser.sub },
  })

  const pendingTransactions = await db.transaction.findMany({
    where: { UserProfile: profile, effective: { gte: new Date() } },
  })

  const total = pendingTransactions.reduce((total, transaction) => {
    return total + (transaction.income ? transaction.value : -transaction.value)
  }, 0)

  return {
    pendingTransactions: pendingTransactions.length,
    pendingTransactionsAmount: total,
  }
}
