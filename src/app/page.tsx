"use client";

import Overview from "./_components/overview";
import TransactionGraph from "./_components/transaction-graph/transaction-graph";
import TransactionsTable from "./_components/transactions/transactions-table";

export default function Home() {
  return (
    <div>
      <Overview />
      <TransactionsTable />
      <TransactionGraph />
    </div>
  );
}
