import { z } from 'zod';
const profileSchema = z.object({
    profile_name: z
        .string({
            invalid_type_error: 'Tiene que ser un string',
            required_error: 'Campo requerido',
        })
        .min(3, 'Mínimo 3 caracteres')
        .max(15, 'Máximo 15 caracteres'),
    profile_lastname: z
        .string({
            invalid_type_error: 'Tiene que ser un string',
            required_error: 'Campo requerido',
        })
        .min(3, 'Mínimo 3 caracteres')
        .max(30, 'Máximo 30 caracteres'),
    profile_username: z.optional(
        z
            .string({
                invalid_type_error: 'Tiene que ser un string',
                required_error: 'Campo requerido',
            })
            .min(3, 'Mínimo 3 caracteres')
            .max(15, 'Máximo 15 caracteres')
    ),
    birthdate: z.optional(z.coerce.date()),
    profile_role: z.optional(z.enum(['expert', 'company', 'student'])),

    company_name: z.optional(
        z.string({
            invalid_type_error: 'Tiene que ser un string',
        })
    ),
});

export { profileSchema };
