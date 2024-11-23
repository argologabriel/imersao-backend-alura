import { MongoClient } from 'mongodb';

export async function connectToDB(stringConnection) {
  let mongoClient;

  try {
      mongoClient = new MongoClient(stringConnection);
      console.log('Conectando ao cluster do banco de dados...');
      await mongoClient.connect();
      console.log('Conectado ao MongoDB com sucesso!');

      return mongoClient;
  } catch (error) {
      console.error('Falha na conexão com o banco!', error);
      process.exit();
  }
}