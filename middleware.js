
const time = (req, res, next) => {
    var now = new Date();
    const hour = now.getHours();
    const day = now.getDay();
    if (0<day && day<4 && 9<hour && hour<17) {
        next();
    } else {
        res.status(401).sendFile(__dirname + "/pages/error.html");
    }
};

module.exports = time;
