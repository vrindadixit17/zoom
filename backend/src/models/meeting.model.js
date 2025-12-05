import { Schema } from "mongoose";

const meetingScheme = new Schema(
    {
        user_id: {type: String},
        meetingCode: {type: String, required: true},
        date: {type: Date, default: Date.now, required: true},
    }
)

const User = mongoose.model("User", userSchema);

export { User };