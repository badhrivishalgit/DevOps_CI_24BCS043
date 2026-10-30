'use strict';
function isOverdue(dueDate, returnDate) {
  return new Date(returnDate) > new Date(dueDate);
}
module.exports = { isOverdue };
