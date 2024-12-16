"use client";

import Overview from "./_components/overview";
import TransactionsTable from "./_components/transactions/transactions-table";

export default function Home() {
  return (
    <div>
      <Overview />
      <TransactionsTable />
    </div>
  );
}
