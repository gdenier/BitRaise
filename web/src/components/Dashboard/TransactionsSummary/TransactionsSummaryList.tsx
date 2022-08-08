import { ReactElement } from 'react'

import { TransactionSummary } from 'types/graphql'

import { Link } from '@redwoodjs/router'

import { classNames } from 'src/utils/style/classNames'

import { MoneyReciveBrokenIcon } from '../../Icons/vuesax/broken/money-recive'
import { MoneySendBrokenIcon } from '../../Icons/vuesax/broken/money-send'
import { List } from '../../List/List'

export interface TransactionsSummaryList {
  transactions: TransactionSummary[]
}

export const TransactionsSummaryList = ({
  transactions,
}: TransactionsSummaryList): ReactElement => {
  return (
    <List.Wrapper>
      <List.Header headers={['', 'title', 'amount', 'Actions']} />
      {transactions.map((transaction) => (
        <List.Row key={transaction.id}>
          <List.Cell>
            <div
              className={classNames(
                'rounded-xl p-2',
                transaction.income
                  ? 'bg-green-300 text-green-800'
                  : 'bg-red-300 text-red-800'
              )}
            >
              {transaction.income ? (
                <MoneyReciveBrokenIcon />
              ) : (
                <MoneySendBrokenIcon />
              )}
            </div>
          </List.Cell>
          <List.Cell>{transaction.title}</List.Cell>
          <List.Cell>
            <p
              className={classNames(
                'text-xl font-bold',
                transaction.income ? 'text-green-600' : 'text-red-600'
              )}
            >
              {transaction.value}
            </p>
          </List.Cell>
          <List.Cell>
            <Link to="#" className="btn btn-primary">
              Voir
            </Link>
          </List.Cell>
        </List.Row>
      ))}
    </List.Wrapper>
  )
}
