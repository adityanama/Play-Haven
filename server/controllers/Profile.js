const Profile = require("../models/Profile");
const User = require("../models/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader");
const { convertSecondsToDuration } = require("../utils/secToDuration")

exports.updateProfile = async (req, res) => {
    try {
        const { dateOfBirth, address, contactNumber, gender = 'Male', firstName, lastName } = req.body;
        const id = req.user.id;

        const userDetails = await User.findById(id);
        const profileId = userDetails.additionalDetails;

        const profileDetails = await Profile.findById(profileId);

        profileDetails.dateOfBirth = dateOfBirth;
        profileDetails.address = address;
        profileDetails.gender = gender;
        profileDetails.contactNumber = contactNumber;
        await profileDetails.save();

        userDetails.firstName = firstName;
        userDetails.lastName = lastName;
        if (userDetails.image.includes('dicebear'))
            userDetails.image = `https://api.dicebear.com/5.x/initials/svg?seed=${firstName[0]}${lastName[0]}`

        await userDetails.save();

        const updatedUserDetails = await User.findById(id).populate("additionalDetails");
        console.log(updatedUserDetails);

        return res.status(200).json({
            success: true,
            message: "Profile updated successfully",
            updatedUserDetails,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


exports.deleteAccount = async (req, res) => {
    try {
        const id = req.user.id

        const user = await User.findById({ _id: id })
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            })
        }

        await Profile.findByIdAndDelete({
            _id: new mongoose.Types.ObjectId(user.additionalDetails),
        })


        await User.findByIdAndDelete({ _id: id })
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
        })
        await CourseProgress.deleteMany({ userId: id })

    } catch (error) {
        console.log(error)
        res
            .status(500)
            .json({ success: false, message: "User Cannot be deleted successfully" })
    }
}

exports.getAllUserDetails = async (req, res) => {
    try {
        const id = req.user.id;

        const userDetails = await User.findById(id).populate("additionalDetails").populate("games").exec();

        return res.status(200).json({
            success: true,
            message: "User Data fetched Successfully",
            userDetails,
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

exports.updateDisplayPicture = async (req, res) => {
    try {
        const displayPicture = req.files.displayPicture;
        const userId = req.user.id;

        const image = await uploadImageToCloudinary(
            displayPicture,
            process.env.FOLDER_NAME,
            1000,
            1000,
        )

        console.log(image);

        const updatedProfile = await User.findByIdAndUpdate(userId, { image: image.secure_url }, { new: true });

        return res.status(200).json({
            success: true,
            message: "Profile Picture updated Successfully",
            data: updatedProfile,
        })

    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}