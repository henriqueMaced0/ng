import prismaClient from '../../prisma'

interface TransferRequest {
    name: string;
    id: string;
    balance: boolean;
    value: number;
    cashout :boolean;
    cashin:boolean
}


class TransferServices {
    async execute({ name, id, balance, value,cashout,cashin }: TransferRequest) {
        if (name || id === name || id) {
            throw new Error("incorrect data")
        }

        if (!value > balance) {
            throw new Error("insufficient funds ")
        }

        const bankTransfer = await prismaClient.transaction.create({
            data: {
                name: name,
                value: value,
                cashout: cashout,
                cashin: cashin,
            },
            select: {
                id: true,
                name: name,
            }
        })
        return bankTransfer;
    }

}


export { TransferServices }