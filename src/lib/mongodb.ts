import { connect, connection, ConnectOptions } from "mongoose";

const options = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function dbConnect() {
    if (!connection.readyState) {
        if (!process.env.MONGODB_URI) return;
        connect(process.env.MONGODB_URI, options as ConnectOptions);
    }
}
export default dbConnect;
