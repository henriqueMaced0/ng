import { Request, Response } from 'express'
import { TransferServices } from '../../services/user/TransferServices'


class TransferControllers {
    async handle(req: Request, res: Response) {
        const { name, id, balance, value,cashin,cashout } = req.body

        const transferServices = new TransferServices();

        const transfer = await transferServices.execute({
            name,
            id,
            balance,
            value,
            cashout,
            cashin,

        });

        return res.json(transfer);

    }
}




export { TransferControllers }