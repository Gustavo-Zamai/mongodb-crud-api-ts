import mongoose, { ConnectOptions } from 'mongoose';

// Conexão com o MongoDB
const connection = mongoose.connect(process.env.MONGO_URI || 'mongodb://mongo:27017/apitest', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

// Definição do schema
const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { collection: 'customers' },
);

// Modelo tipado
interface ICustomer extends mongoose.Document {
  name: string;
  email: string;
}

const Customer = mongoose.model<ICustomer>('Customer', customerSchema);

// Exportações organizadas
export { connection, Customer, customerSchema, mongoose };

// Opcional: exportar tipos úteis
export type { ICustomer };
