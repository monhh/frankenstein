import { useContext, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { insertProfileService } from '../../services/profileServices';
import { useNavigate } from 'react-router-dom';
import { profileSchema } from '../../../schemas/profileSchema';

export const NewProfile = () => {
    const [error, setError] = useState('');
    const [sending, setSending] = useState(false);
    const [image, setImage] = useState();
    const [validationErrors, setValidationErrors] = useState({});
    const [profileName, setProfileName] = useState('');
    const navigate = useNavigate();
    const { token, user } = useContext(AuthContext);

    const handleForm = async (e) => {
        e.preventDefault();
        setValidationErrors({});
        setError('');

        try {
            const validationResult = profileSchema.safeParse({ profileName });
            if (!validationResult.success) {
                const errors = {};
                validationResult.error.issues.forEach((err) => {
                    errors[err.path[0]] = err.message;
                });
                setValidationErrors(errors);
                // return;
            }
            setSending(true);
            const data = new FormData(e.target);

            await insertProfileService({ data, token });
            setImage(null);
            navigate(`/profile/${user.register_id}`);
        } catch (error) {
            setError(error.message);
        } finally {
            setSending(false);
        }
    };
    return (
        <>
            <h1>formulario Perfil</h1>
            <form noValidate onSubmit={handleForm}>
                <fieldset>
                    <label htmlFor="profile_name">Nombre</label>
                    <input
                        type="text"
                        id="profile_name"
                        name="profile_name"
                        value={profileName}
                        onChange={(e) => setProfileName(e.target.value)}
                    />
                    {validationErrors.profile_name && (
                        <p className="h-4 text-sm text-rose-500">
                            {validationErrors.email}
                        </p>
                    )}
                </fieldset>
                <fieldset>
                    <label htmlFor="profile_lastname">Apellidos</label>
                    <input
                        type="text"
                        id="profile_lastname"
                        name="profile_lastname"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="profile_username">Nickname</label>
                    <input
                        type="text"
                        id="profile_username"
                        name="profile_username"
                    />
                </fieldset>
                <fieldset>
                    <label htmlFor="birthdate">Fecha de naciemiento</label>
                    <input type="text" id="birthdate" name="birthdate" />
                </fieldset>
                <fieldset>
                    <label htmlFor="profile_role">Rol</label>
                    <select id="profile_role" name="profile_role">
                        <option value="Escoge un role">Escoge un rol</option>
                        <option value="company">Empresa</option>
                        <option value="expert">Experto</option>
                        <option value="student">Studiante</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor="company">Empresa</label>
                    <input type="text" id="company" name="company" />
                </fieldset>
                <fieldset>
                    <label htmlFor="avatar">Avatar</label>
                    <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        accept="image/*"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                    {image ? (
                        <figure>
                            <img
                                src={URL.createObjectURL(image)}
                                alt="Preview"
                                style={{ width: '100px' }}
                            />
                        </figure>
                    ) : null}
                </fieldset>
                <button>Actualizar perfil</button>
                {sending ? <p>Sending project</p> : null}
                {error ? <p>{error}</p> : null}
            </form>
        </>
    );
};
