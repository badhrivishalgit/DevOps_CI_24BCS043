'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { calculateDueDate, calculateFine } = require('../src/library');

test('due date is 14 days after the issue date', () => {
  assert.strictEqual(calculateDueDate('2026-10-01'), '2026-10-15');
});

test('due date rolls over a year boundary', () => {
  assert.strictEqual(calculateDueDate('2026-12-25'), '2027-01-08');
});

test('no fine when returned on the due date', () => {
  assert.strictEqual(calculateFine('2026-10-15', '2026-10-15'), 0);
});

test('Rs.2 per day when returned late', () => {
  assert.strictEqual(calculateFine('2026-10-15', '2026-10-20'), 10);
});

test('invalid date throws an error', () => {
  assert.throws(() => calculateDueDate('not-a-date'), /Invalid/);
});
