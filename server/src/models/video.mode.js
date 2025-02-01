import mongoose, { Schema, model } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        require: true
    },
    thumbnail: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true,
        trim: true
    },
    description: {
        type: String,
        require: true
    },
    duration: {
        type: Number,
        require: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {

        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, { timestamps: true });

// videoSchema.plugin(mongooseAggregatePaginate)
export const Video = model("Video", videoSchema);