import * as jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import { UserProps, Usuario } from '../entidades/Usuario/models/Usuario';
import passport from 'passport';

export function loginMiddleware(req: Request, res: Response, next: NextFunction) {
    passport.authenticate(
        'login',
        (err: any, user: UserProps, info: any) =>{
            try {
                if(err){
                    throw new Error(err);
                }
                req.login(
                    user,
                    {session:false},
                    (error: any)=>{
                        if(error){ 
                            next(error);}
                        const body = {
                            id: user.id,
                            email: user.email,
                            nome: user.nome,
                            senha: user.senha,
                        };

                        if(!user){
                            throw new Error('Usuário e/ou senha inválido(s)');
                        }
                        const secret = process.env.SECRET_KEY || '';

                        const token = jwt.sign({user:body}, secret, {expiresIn: process.env.JWT_EXPIRATION} );

						res.cookie('jwt', token, {
							httpOnly: true,
							secure: process.env.NODE_ENV === 'production'
						});

						res.status(204).end();
                    }
                )
            } catch (error) {
                res.status(401).send("ERRO"+ error);
            }
        }
    )(req, res, next);
}

export function notLoggedInMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.cookies['jwt'];
    const secret = process.env.SECRET_KEY || '';
    if(token){
        jwt.verify(token, secret, (err: any, decoded: any) =>{
            if(!(err instanceof jwt.TokenExpiredError)){
                res.status(400).send('Você já está conectado ao sistema!');
            }
        });
    }
    next();
}