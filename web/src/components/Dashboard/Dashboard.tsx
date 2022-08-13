import TransactionsSummaryCell from 'src/components/Dashboard/TransactionsSummaryCell'
import { useUserProfile } from 'src/hooks/profile/useUserProfile'
import { useStatsSummary } from 'src/hooks/stats/useStatsSummary'

import { MoneyBrokenIcon } from '../Icons/vuesax/broken/money'
import { MoneySendBrokenIcon } from '../Icons/vuesax/broken/money-send'
import { StatsCard } from '../ui/StatsCard'

const Dashboard = () => {
  const { profile } = useUserProfile()
  const { stats } = useStatsSummary()

  return (
    <>
      <div className="flex gap-2 overflow-y-auto">
        <StatsCard
          title="Montant total"
          value={profile?.balance}
          icon={<MoneyBrokenIcon />}
        />
        <StatsCard
          title="Mouvements a venir"
          value={stats?.pendingTransactionsAmount}
          icon={<MoneySendBrokenIcon />}
        />
      </div>
      <TransactionsSummaryCell />
    </>
  )
}

export default Dashboard
