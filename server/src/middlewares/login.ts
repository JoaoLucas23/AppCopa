// import { Passport } from "passport";
// import jwt, {Secret, JwtPayload} from "jsonwebtoken";
// import {Request, Response, NextFunction, Router} from "express";
// import { DecodedToken } from "jwks-rsa";

// const passport = new Passport();

// const auth = {
//     secret: String(process.env.SECRET_KEY),
//     expires: String(process.env.JWT_EXPIRATION)
// }

// passport.use(
//     'login',
//     new LocalStrategy(
//       {
//         usernameField: 'email',
//         passwordField: 'password',
//         session: false,
//         passReqToCallback: true,
//       },
//       async (req, email, password, done) => {
//         try {
//           const user = await User.findOne({
//             where: {email: email}
//           });
  
//           if (!user) {
//             throw new NotAuthorizedError('E-mail e/ou senha incorretos!');
//           }
  
//           if (user.deletedAt) {
//             throw new NotAuthorizedError('Esse usuário foi desativado! ' +
//               'Entre em contato com um administrador para mais informações.');
//           }
  
//           const matchingPassword = await bcrypt.compare(password, user.password);
//           if (!matchingPassword) {
//             throw new NotAuthorizedError('E-mail e/ou senha incorretos!');
//           }
  
//           return done(null, user);
//         } catch (error) {
//           return done(error, false);
//         }
//       },
//     ),
//   );
  
//   const cookieExtractor = (req) => {
//     let token = null;
  
//     if (req && req.cookies) {
//       token = req.cookies['jwt'];
//     }
  
//     return token;
//   };
  
//   passport.use(
//     new JwtStrategy(
//       {
//         secretOrKey: process.env.SECRET_KEY,
//         jwtFromRequest: cookieExtractor,
//         passReqToCallback: true,
//       },
//       async (req, jwtPayload, done) => {
//         try {
//           const blacklistHasToken =
//             await blacklist.hasToken(req.cookies['jwt']);
//           if (blacklistHasToken) {
//             throw new JsonWebTokenError('Token inválido por logout!');
//           }
  
//           return done(null, jwtPayload.user);
//         } catch (error) {
//           return done(error, false);
//         }
//       },
//     ),
//   );  

// function loginMiddleware(req: Request, res: Response, next: NextFunction) {
//     passport.authenticate(
//       'login',
//       (err, user, info) => {
//         try {
//           if (err) {
//             if (err instanceof Error) {
//               return next(err);
//             } else {
//               return res.status(400).json(err);
//             }
//           }
  
//           req.login(
//             user,
//             {session: false},
//             (error) => {
//               if (error) next(error);
  
//               const body = {
//                 id: user.id,
//                 email: user.email,
//                 role: user.role,
//                 name: user.name,
//                 resetPassword: user.resetPassword,
//               };
  
//               const token = jwt.sign({user: body}, String(process.env.SECRET_KEY),
//                 {expiresIn: process.env.JWT_EXPIRATION});
  
//               // Enviando Cookie
//               res.cookie('jwt', token, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === 'production',
//               });
//               res.status(204).end();
//             },
//           );
//         } catch (error) {
//           next(error);
//         }
//       },
//     )(req, res, next);
// }

// function jwtMiddleware(req: Request, res: Response, next: NextFunction) {
//     passport.authenticate('jwt', {session: false}, (error, user, info) => {
//       try {
//         if (error) return next(error);
//         if (!user) {
//           throw new Error('Você precisa estar logado para realizar essa ação!');
//         }
//         req.user = user;
//         next();
//       } catch (error) {
//         next(error);
//       }
//     })(req, res, next);
//   }
  
// //   function notLoggedIn() {
// //     return (req: Request, res: Response, next: NextFunction) => {
// //       try {
// //         const token = req.cookies['jwt'];
// //         if (token) {
// //           jwt.verify(token, String(process.env.SECRET_KEY),
// //             (err: Error, decoded: DecodedToken) => {
// //               if (!(err instanceof jwt.TokenExpiredError)) {
// //                 throw new Error('Você já está logado no sistema!');
// //               }
// //             },
// //           );
// //         }
  
// //         next();
// //       } catch (error) {
// //         next(error);
// //       }
// //     };
// //   }

// export {loginMiddleware, jwtMiddleware, auth};