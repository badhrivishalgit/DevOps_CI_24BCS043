'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { isOverdue } = require('../src/overdue');
test('late return is overdue', () => { assert.strictEqual(isOverdue('2026-10-15', '2026-10-20'), true); });
test('return on due date is not overdue', () => { assert.strictEqual(isOverdue('2026-10-15', '2026-10-15'), false); });
