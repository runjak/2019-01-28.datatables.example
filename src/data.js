import { textInput } from './util';
import { runInNewContext } from 'vm';

/*
This module exports an object of the shape we expect for our table.
See https://datatables.net/reference/option/ for details
*/

const exampleData = {
  data: [
    {
      id: '23',
      name: 'Mark Rehle',
      occupation: 'Very cool fish',
      secret: 'likes the sea',
      new: false,
    },
    {
      id: Math.ceil(Math.random() * 42) + 1,
      name: 'Dr. W. Ahl',
      occupation: 'A big player',
      secret: 'can sing very nicely',
      new: false,
    },
  ],
  columns: [
    {
      title: '#',
      data: 'id',
    },
    {
      title: 'Name',
      data: 'name',
      render: function(data, type, row, meta) {
        if (!row.new || type !== 'display') {
          return data;
        }

        return textInput(`row-${row.id}-occupation`, data);
      },
    },
    {
      title: 'does what?',
      // data can be a function, too - to read/write from/to the model
      data: 'occupation',
      render: function (data, type, row, meta) {
        switch(type) {
          case 'display':
            return textInput(`row-${row.id}-occupation`, data);
          
          case 'type':
          case 'sort':
          case 'filter':
          case 'set':
          default:
            return data;
        }
      },
    },
  ],
};

export default exampleData;