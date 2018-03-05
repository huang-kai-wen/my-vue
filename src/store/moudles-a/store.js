// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
const _products = [ 
   {"id": "prod-1", "src":" ../../static/images/jiyu.jpg","new": true,"recommend": true,}, 
   {"id": "prod-2", "src": "../../static/images/jiyu1.jpg","new": true,"recommend": true,}, 
   {"id":" prod-3", "src": "../../static/images/jiyu2.jpg","new": true,"recommend":true,}, 
   {"id": "prod-4", "src": "../../static/images/jiyu.jpg","new":false,"recommend": false,}, 
   {"id": "prod-5", "src": "../../static/images/jiyu.jpg","new": true,"recommend": false,}, 
   {"id": "prod-6", "src":" ../../static/images/jiyu.jpg","new": true,"recommend": true,}, 
   {"id": "prod-7", "src": "../../static/images/jiyu1.jpg","new": true,"recommend": true,}, 
   {"id":" prod-8", "src": "../../static/images/jiyu2.jpg","new": true,"recommend":true,}, 
   {"id": "prod-9", "src": "../../static/images/jiyu.jpg","new":false,"recommend": false,}, 
   {"id": "prod-10", "src": "../../static/images/jiyu.jpg","new": true,"recommend": false,}, 
   {"id":" prod-11", "src": "../../static/images/jiyu2.jpg","new": false,"recommend": false,} 
] 
export default {
  getProducts ({cd="id",fd="prod-2"}={}) {
    var new_products
    new_products=_products.filter((x)=>{return x[cd]==fd})
    
    return new_products
  },
 getAllProducts () {
    
    return _products
  }
}