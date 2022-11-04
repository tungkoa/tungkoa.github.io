export const LANGUAGES: Array<{
  name: string,
  open?: boolean,
  items: Array<{
    name: string,
    url: string,
    open?: boolean,
    // code?: string,
    // detail?: string,
    isActive?: boolean,
    html?: Array<any>
  }>
}> = [
  {
    name: 'Javascript',
    open: true,
    items: [
      {
        name: 'Hoisting',
        url: '',
        isActive: true,
        html: [
          {type: 'text', content: 'Hoisting is JavaScript\'s default behavior of moving declarations to the top.'},
          {
            type: 'code', content: 'x = 5; // Assign 5 to x\n' +
              '\n' +
              'console.log(x) // 5' +
              '\n' +
              'var x; // Declare x'
          },
        ],
      },
      {
        name: 'This (bind, apply, call)',
        html: [
          {type: 'text', content: 'In an object method, this refers to the object.<br>' +
              'Alone, this refers to the global object.<br>' +
              'In a function, this refers to the global object.<br>' +
              'In a function, in strict mode, this is undefined.<br>' +
              'In an event, this refers to the element that received the event.<br>' +
              'Methods like call(), apply(), and bind() can refer this to any object.'},
          {
            type: 'code', content: 'const person1 = {\n' +
              '  fullName: function(city, country) {\n' +
              '    return this.firstName + " " + this.lastName;\n' +
              '  }\n' +
              '}\n' +
              '\n' +
              'const person2 = {\n' +
              '  firstName:"John",\n' +
              '  lastName: "Doe",\n' +
              '}\n' +
              '\n' +
              'let x = person1.fullName.call(person2); // John Doe\n' +
              'let y = person1.fullName.bind(person2)(); // John Doe\n' +
              '// Different between call and apply:\n' +
              'person.fullName.apply(person1, ["Oslo", "Norway"]);\n' +
              'person.fullName.call(person1, "Oslo", "Norway"); // city, country'
          },
        ],
        url: ''
      },
      {
        name: 'Scope',
        html: [
          {type: 'title', content: 'Block scope'},
          {type: 'text', content: 'Variables declared inside a { } block cannot be accessed from outside the block:<br>' +
          'Variables declared with the var keyword can NOT have block scope.<br>' +
              'Variables declared inside a { } block can be accessed from outside the block.'},
          {
            type: 'code', content: '{\n' +
              '  let x = 2;\n' +
              '}\n' +
              '// x can NOT be used here\n' +
              '{\n' +
              '  var x = 2;\n' +
              '}\n' +
              '// x CAN be used here'
          },
          {type: 'title', content: 'Function scope'},
          {type: 'text', content: 'JavaScript has function scope: Each function creates a new scope.<br>' +
              'Variables defined inside a function are not accessible (visible) from outside the function.<br>' +
              'Variables declared with var, let and const are quite similar when declared inside a function.'},
          {type: 'title', content: 'Global scope'},
          {type: 'text', content: 'Variables declared Globally (outside any function) have Global Scope.<br>' +
              'Global variables can be accessed from anywhere in a JavaScript program.<br>' +
              'Variables declared with var, let and const are quite similar when declared outside a block.'}
        ],
        url: ''
      },
      {
        name: 'Closure',
        url: ''
      },
      {
        name: 'Function, scope',
        url: ''
      },
      {
        name: 'Promises, Async-Await',
        url: ''
      },
      {
        name: 'ES6 (arrow function, spread, destructoring)',
        url: ''
      },

    ]
  },
  {
    name: 'Angular',
    items: [
      {
        name: 'Client side rendering vs Server side rendering',
        url: '',
        isActive: true,
        html: [
          {type: 'title', content: 'Server Side rendering'},
          {type: 'text', content: 'Logic routing, render trên server<br>Seo tốt<br>Load 1 trang nhanh<br>Server phải xử lý nhiều logic và dữ liệu<br>Tương tác không tốt như Client Side rendering vì trang phải refresh, load lại nhiều lần'},
          {type: 'title', content: 'Client Side rendering'},
          {type: 'text', content: 'Logic đơn giản (validation, đọc dữ liệu, sorting, filtering) nằm ở client side<br>Logic để routing (chuyển trang), render (hiển thị) dữ liệu hầu hết ở trên client<br>Load lần đầu chậm'},
        ],
      },
      {
        name: 'This (bind, apply, call)',
        html: [
          {type: 'text', content: 'In an object method, this refers to the object.<br>' +
              'Alone, this refers to the global object.<br>' +
              'In a function, this refers to the global object.<br>' +
              'In a function, in strict mode, this is undefined.<br>' +
              'In an event, this refers to the element that received the event.<br>' +
              'Methods like call(), apply(), and bind() can refer this to any object.'},
          {
            type: 'code', content: 'const person1 = {\n' +
              '  fullName: function(city, country) {\n' +
              '    return this.firstName + " " + this.lastName;\n' +
              '  }\n' +
              '}\n' +
              '\n' +
              'const person2 = {\n' +
              '  firstName:"John",\n' +
              '  lastName: "Doe",\n' +
              '}\n' +
              '\n' +
              'let x = person1.fullName.call(person2); // John Doe\n' +
              'let y = person1.fullName.bind(person2)(); // John Doe\n' +
              '// Different between call and apply:\n' +
              'person.fullName.apply(person1, ["Oslo", "Norway"]);\n' +
              'person.fullName.call(person1, "Oslo", "Norway"); // city, country'
          },
        ],
        url: ''
      },
    ]
  },
  {
    name: 'Addition',
    items: [
      {
        name: 'Authentication and authorization',
        url: ''
      },

    ]
  }
]

