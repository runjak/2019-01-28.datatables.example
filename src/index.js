import $ from 'jquery';
import datatables from 'datatables.net-dt';
import uniqueId from 'lodash/uniqueId';

import data from './data';

// Render code
$('#code-container').text(
  JSON.stringify(data, undefined, 2),
);

// Initialize table
const table = $('#table-container').DataTable(data)

// Adding new entries
const nameInput = $('#new-name');
$('#add-new-name').click(() => {
  const name = nameInput.val();
  nameInput.val('');

  table.row.add({
    id: uniqueId('new-'),
    name,
    occupation: 'no occupation given',
    new: true,
  }).draw();
});