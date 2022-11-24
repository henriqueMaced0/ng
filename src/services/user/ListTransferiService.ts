import prismaClient from "../../prisma";

interface ListRequest {
    category_id: string;
}

class ListTransferiService {
    async execute({ category_id }: ListRequest) {
        const list = await prismaClient.transaction.findMany({
            where: {
                category_id: category_id,
            }
        })
        return list;
    }
}

export {ListTransferiService}