const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.MONGODB_URI || 'mongodb://mongo:27017/chatApp';

/* async function connectDB() {
  try {
    await mongoose.connect(DB_URI);
    console.log('Conectado a MongoDB con éxito');

    mongoose.connection.on('connected', () => {
      console.log('Conexión a MongoDB establecida');
    });

    mongoose.connection.on('error', (err) => {
      console.error('Error en la conexión a MongoDB:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.error('Conexión a MongoDB perdida.');
    });
    
    mongoose.connection.on('disconnected', () => {
      console.error('Conexión perdida. Reintentando...');
      connectDB();
    });    

  } catch (error) {
    console.error('Error al conectar a MongoDB:', error);
    process.exit(1);
  }
} */

  async function connectDB() {
    try {
      await mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

       // Listar las colecciones como prueba
      const collections = await mongoose.connection.db.listCollections().toArray();
      console.log('Colecciones en la base de datos:', collections);
      /////////////////////////////////
      console.log('Conexión establecida, iniciando el servidor...');
    } catch (error) {
      console.error('Error al conectar a MongoDB:', error);
      process.exit(1);
    }
  }
  
  mongoose.connection.on('disconnected', () => {
    console.error('Conexión perdida. Intentando reconectar...');
    connectDB();
  });

async function getFullDatabase() {
  if (mongoose.connection.readyState !== 1) {
    throw new Error('No conectado a MongoDB');
  }
  try {
    const db = mongoose.connection.db;
    const collections = await db.listCollections().toArray();
    const data = {};

    for (const collection of collections) {
      const docs = await db.collection(collection.name).find().toArray();
      data[collection.name] = docs;
    }
    return data;
  } catch (error) {
    console.error('Error al obtener la base de datos:', error);
    throw error;
  }
}

module.exports = { connectDB, getFullDatabase, mongoose };