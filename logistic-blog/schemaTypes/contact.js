export default {
    name: 'contact',
    type: 'document',
    title: 'Contact Messages',
    fields: [
      { name: 'name', type: 'string', title: 'Name' },
      { name: 'email', type: 'string', title: 'Email' },
      { name: 'message', type: 'text', title: 'Message' },
      {name:"phone", type: "string", title: "Phone"},
      { name: 'createdAt', type: 'datetime', title: 'Submitted At', initialValue: () => new Date().toISOString() },
    ],
  }
  