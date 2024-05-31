import dotenv from 'dotenv';

dotenv.config();
export const env={
    PORT:process.env.PORT,
    PASSWORD: process.env.PASSWORD,
    MAIL:process.env.MAIL,
}
