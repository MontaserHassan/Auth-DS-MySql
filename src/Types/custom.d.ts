// custom.d.ts
import { Request } from 'express';

declare global {
    namespace Express {
        interface Request {
            currentUserId?: number;
            currentUserRole?: string;
        }
    }
}
