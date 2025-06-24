import { Request, Response, Router } from 'express';
import { Customer } from '../database/database';

const router = Router();

// Adicione esta interface para o corpo das requisições
interface CustomerRequestBody {
  name: string;
  email: string;
}

// Helper para tratamento de erros
const handleError = (res: Response, error: unknown) => {
  const message = error instanceof Error ? error.message : 'Unknown error';
  res.status(500).json({ error: message });
};

router.get('/customers', async (req: Request, res: Response) => {
  try {
    const customers = await Customer.find({}).lean().exec();
    res.json(customers);
  } catch (error) {
    handleError(res, error);
  }
});

router.get('/customers/:id', async (req: Request<{ _id: string }>, res: Response) => {
  try {
    const customer = await Customer.findById(req.params._id).lean().exec();
    customer ? res.json(customer) : res.status(404).json({ message: 'Not found' });
  } catch (error) {
    handleError(res, error);
  }
});

router.post('/customers', async (req: Request<{}, {}, CustomerRequestBody>, res: Response) => {
  try {
    const customer = new Customer(req.body);
    const savedCustomer = await customer.save();
    res.status(201).json(savedCustomer);
  } catch (error) {
    handleError(res, error);
  }
});

router.put(
  '/customers/:id',
  async (req: Request<{ _id: string }, {}, CustomerRequestBody>, res: Response) => {
    try {
      const options = { new: true, runValidators: true };
      const updatedCustomer = await Customer.findByIdAndUpdate(req.params._id, req.body, options)
        .lean()
        .exec();

      updatedCustomer ? res.json(updatedCustomer) : res.status(404).json({ message: 'Not found' });
    } catch (error) {
      handleError(res, error);
    }
  },
);

router.delete('/customers/:id', async (req: Request<{ _id: string }>, res: Response) => {
  try {
    const deletedCustomer = await Customer.findByIdAndDelete(req.params._id).lean().exec();
    deletedCustomer ? res.json({ success: true }) : res.status(404).json({ message: 'Not found' });
  } catch (error) {
    handleError(res, error);
  }
});

export default router;
