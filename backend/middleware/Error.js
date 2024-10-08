const errorMiddleware = (err, req, resp, next) => {

    err.message = err.message || "Internal Server Error";
    err.statusCode = err.statusCode || 500;

    // console.log(err);

    resp.status(err.statusCode).json({
        message: err.message,
        success: false
    })
}

export default errorMiddleware;