import $ from 'jquery';
import datatables from 'datatables.net-dt';

import data from './data';

// Render code
$('#code-container').text(
  JSON.stringify(data, undefined, 2),
);

// Initialize table
$('#table-container').DataTable(data)
