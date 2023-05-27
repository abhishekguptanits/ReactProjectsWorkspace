import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

import "./Expenses.css";
import "./ExpensesList";


function Expenses({ expenses }) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpeses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpeses} />
        <ExpensesList filteredExpeses={filteredExpeses} />
      </Card>
    </div>
  );
}

export default Expenses;
