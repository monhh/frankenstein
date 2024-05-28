import { useParams } from 'react-router-dom';
import { useProjectsByprofile } from '../hooks/useProjectByProfile';
import { ProjectListProfile } from '../components/ProjectListProfile';
import { ErrorMessage } from '../components/ErrorMessage';
import { QuestionsListProfile } from '../components/QuestionsComponents/QuestionsListProfile';
import { useQuestionsProfile } from '../hooks/QuestionsHook/useQuestionsProfile';
import { useProfile } from '../hooks/profilehook/useProfile';
// import { useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';

export const ProfilePublic = () => {
    const { id } = useParams();
    // const { user } = useContext(AuthContext);
    const { projectsProfile, loading, error } = useProjectsByprofile(id);
    const { profile } = useProfile(id);
    const { questionsProfile } = useQuestionsProfile(id);
    if (loading) return <p>cargando perfil...</p>;
    if (error) return <ErrorMessage message={error} />;
    return (
        <div className="flex flex-grow flex-col max-w-[395px] mx-auto">
            <div className="flex flex-col items-center self-center px-3 pt-2 pb-5 w-full text-lg font-medium leading-6 text-center text-black whitespace-nowrap max-w-[363px]"></div>
            <h1 className="text-3xl font-bold mb-4 text-center">
                Perfil de {profile.profile_username}
            </h1>
            <article className="bg-white p-6 flex flex-col items-center space-y-4">
                {profile.avatar ? (
                    <img
                        loading="lazy"
                        src={`${import.meta.env.VITE_BASE_URL}/uploads/${
                            profile.avatar
                        }`}
                        alt={profile.profile_name}
                        className="rounded-full w-[189px] h-[189px] object-cover"
                    />
                ) : (
                    <div className="shrink-0 rounded-full bg-zinc-300 h-[189px] w-[189px]">
                        {profile.profile_name?.[0]}
                    </div>
                )}
                <div className="mt-3.5">
                    <h1 className="text-md text-gray-500 text-center">
                        Rol: {profile.profile_role}
                    </h1>
                    <ProjectListProfile projectsProfile={projectsProfile} />
                    <QuestionsListProfile questionsProfile={questionsProfile} />
                </div>
            </article>
        </div>
    );
};
