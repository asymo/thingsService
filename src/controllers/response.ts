import { Thing } from '../models/things'

exports.sendResponse = (res: any, status: number, message: string, data: Thing[]) => {
    res.status(status).json({
        message,
        data
    });
}