const path = require('path'); 
// const VueSrc = "src";
 module.exports = {  
  configureWebpack: {  
    resolve: {
        alias: {  
            '@': 'mycoins' 
        },
      extensions: ['.js', '.vue', '.json']
    },  
  }
}