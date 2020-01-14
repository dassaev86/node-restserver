//===================================
// Puerto
//===================================
process.env.PORT = process.env.PORT || 3000;

//===================================
// Entorno
//===================================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===================================
// BD
//===================================
let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/cafe';
} else {
    urlBD =
        'mongodb+srv://dassa86:SeyjgNTw0xh81AfD@cluster0-khycw.mongodb.net/test?retryWrites=true&w=majority';
}

process.env.URLDB = urlBD;

// 'mongodb://localhost:27017/cafe'

// 'mongodb+srv://dassa86:SeyjgNTw0xh81AfD@cluster0-khycw.mongodb.net/test?retryWrites=true&w=majority'