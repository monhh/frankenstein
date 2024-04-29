import selectProfileByModel from '../../models/profile/selectProfileByModel.js';

const profileGetController = async (req, res, next) => {
    try {
        const profile_id = req.params;
        console.log(profile_id.id);

        const profileId = await selectProfileByModel(profile_id.id);
        res.send({
            status: 'ok',
            data: profileId,
        });
        console.log(profileId);
    } catch (error) {
        console.log(error.message);
    }
};
export { profileGetController };
