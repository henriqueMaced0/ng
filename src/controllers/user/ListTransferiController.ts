import { Request, Response } from 'express'
import { ListTransferiService } from '../../services/user/ListTransferiService'


class ListTransferiController {
    async handle(req: Request, res: Response) {
        const category_id = req.query.category_id as string;

        const listCategory = new ListTransferiService();

        const cash = await listCategory.execute({
            category_id,
        });
        return res.json(cash);
    }
}

export { ListTransferiController }