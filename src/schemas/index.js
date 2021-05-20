
const { schema, model } = requier('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            match: [/.@.+\..+/], M
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
    }
)