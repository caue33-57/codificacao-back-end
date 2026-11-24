import { registerAs } from "@nestjs/config";

export default registerAs('auth', () => ({
    jwtSecret: process.env.JWT_SECRET || 'chave_secreta_padrao',
    jwtExperesIn: process.env.JWT_EXPIRES_ || 'id',
}));