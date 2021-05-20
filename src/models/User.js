const { schema, model } = requier('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            match: [/.@.+\..+/],
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        }
    }
)