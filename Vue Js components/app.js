Vue.component('todo-item', {
    // The todo-item component now accepts a
    // "prop", which is like a custom attribute.
    // This prop is called todo.
    props: ['todo'],
    template: '<li>{{todo.text}}</li>'
})

Vue.component('button-counter', {
    data: function () {
        return {
            count: 0
        }
    },
    template: '<button v-on:click="count++">You clicked me {{ count }} times</button>'
})


Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
  })





var app = new Vue({
    el: '#list-demo',
    data: {
      items: [1,2,3,4,5,6,7,8,9],
      nextNum: 10
    },
    methods: {
      randomIndex: function () {
        return Math.floor(Math.random() * this.items.length)
      },
      add: function () {
        this.items.splice(this.randomIndex(), 0, this.nextNum++)
      },
      remove: function () {
        this.items.splice(this.randomIndex(), 1)
      },
    }
  })



  var app = new Vue({
    el: '#demo',
    data: {
      message: 'Click for slide',
      show: true,
      imgList: [
        'http://via.placeholder.com/350x150',
        'http://via.placeholder.com/350x151',
        'http://via.placeholder.com/350x152'
      ],
      currentImg: 0
    },
    mounted() {
      setInterval(() => {
          this.currentImg = this.currentImg + 1;
      }, 3000);
    }
  })



  var  app = new Vue({
    el: '#slide-demo',
    data: {
      back: false,
      currentIndex: 0
    },
    methods: {
      next(){
        this.back = false;
        this.currentIndex++;
      },
      prev(){
        this.back = true;
        this.currentIndex--;
      }
    },
  })



  
  var app = new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
})



  var app = new Vue({
    el: '#blog-post-stuff',
    data: {
        posts: [
            { id: 1, title: 'My journey with Vue' },
            { id: 2, title: 'Blogging with Vue' },
            { id: 3, title: 'Why Vue is so fun' }
        ]
    }
  })







  
  var app = new Vue({
    el: '#blog-posts-events-demo',
    data: {
      posts: [/* ... */],
      postFontSize: 1
    }
  })


















var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})
var app = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})
var app = new Vue({
    el: '#app-3',
    data: {
        seen: false
    }
})
var app = new Vue({
    el: '#app-4',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue' },
            { text: 'Build something awesome' }
        ]
    }
})
var app = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join()
        }
    }
})
var app = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello Vue!'
    }
})
var app = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: 'Vegetable' },
            { id: 1, text: 'Cheese' },
            { id: 2, text: 'Whatever else humans are supposed to eat' }
        ]
    }
})

var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app-8',
    data: obj
})


var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('example') // => true

// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
    // This callback will be called when `vm.a` changes
})



var app = new Vue({
    el: '#demo-blog'
})

var app = new Vue({
    el: 'blog-post-dymo'
})


var app = new Vue({
    el: '#components-demo'
})


