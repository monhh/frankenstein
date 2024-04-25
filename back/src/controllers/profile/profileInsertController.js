import getConnection from '../../db/getConnection.js';
// import jwt from 'jsonwebtoken';
// const { SECRET } = process.env;
import { profileSchema } from '../../schemas/profileSchema .js';
import { zodErrorMap } from '../../helpers/zodError.js';

const profileInsertController = async (req, res, next) => {
    console.log('req.body): ', req.body);
    try {
        let connection;
        // const { authorization } = req.headers;
        // let tokenInfo;

        // tokenInfo = jwt.verify(authorization, SECRET);

        // const user = tokenInfo;
        // console.log('req.user.user_id): ', req.user.user_id);
        const {
            success,
            data: profile,
            error,
        } = profileSchema.safeParse(req.body);

        if (!success) {
            const errors = zodErrorMap(error.issues);
            return res.status(400).send({ error: errors });
        }
        const {
            profile_name,
            profile_lastname,
            profile_username,
            birthdate,
            profile_role,
            company_name,
        } = profile;
        connection = await getConnection();

        const [profileDB] = await connection.query(
            `INSERT INTO profile (profile_name,
                profile_lastname,
                profile_username,
                birthdate,
                profile_role,
                register_id) 
                VALUES (?,?,?,?,?,?)
            `,
            [
                profile_name,
                profile_lastname,
                profile_username,
                birthdate,
                profile_role,

                //req.user.user_id,
                //comente la linea anterior porque no me funcionaba, igual lo miramos todos mañana
                req.userId,
            ]
        );
        connection = await getConnection();

        const [company] = await connection.query(
            `INSERT INTO companies (company_name, 
                register_id) 
                VALUES (?,?)
            `,
            [
                company_name,
                //req.user.user_id,
                //comente la linea anterior porque no me funcionaba, igual lo miramos todos mañana
                req.userId,
            ]
        );
        console.log(profileDB);
        console.log(company);

        res.send('Perfil creado');
    } catch (error) {
        console.error(error);
    }
};

export { profileInsertController };
