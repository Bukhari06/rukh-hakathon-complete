// schemas/order.js
export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
    },
    {
      name: 'address',
      title: 'Address',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }], // Reference to the 'product' type
    },
    {
      name: 'total',
      title: 'Total Price',
      type: 'number',
    },
    {
      name: 'orderDate',
      title: 'Order Date',
      type: 'datetime',
    },
    {
      name: 'orderStatus',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['Pending', 'Confirmed', 'Shipped'], // Example statuses
      },
    },
  ],
};
