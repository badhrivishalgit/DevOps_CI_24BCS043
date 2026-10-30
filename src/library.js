'use strict';

const LOAN_DAYS = 14;
const FINE_PER_DAY = 2;

// Due date = issue date + 14 days (UTC, so time zones cannot shift the day).
function calculateDueDate(issueDate, loanDays = LOAN_DAYS) {
  if (loanDays < 0) throw new Error('Loan days cannot be negative');
  const d = new Date(issueDate);
  if (Number.isNaN(d.getTime())) throw new Error('Invalid issue date');
  d.setUTCDate(d.getUTCDate() + loanDays);
  return d.toISOString().slice(0, 10);
}

// Fine = Rs.2 for every full day the book is returned after the due date.
function calculateFine(dueDate, returnDate, perDay = FINE_PER_DAY) {
  const due = new Date(dueDate);
  const ret = new Date(returnDate);
  if (Number.isNaN(due.getTime()) || Number.isNaN(ret.getTime())) {
    throw new Error('Invalid date');
  }
  const daysLate = Math.floor((ret - due) / 86400000);
  return daysLate > 0 ? daysLate * perDay : 0;
}

module.exports = { calculateDueDate, calculateFine, LOAN_DAYS, FINE_PER_DAY };
