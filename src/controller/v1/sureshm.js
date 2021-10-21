exports.getData = (req, res, next) => {
    res
        .status(200)
        .json({
            status: 'success',
            method: req.method,
            endpoint: req.originalUrl,
            data: {
                name: 'Suresh MuthuSelvam',
                description: "Software Devloper",
                githubUrl: "https://github.com/suresh37"
            },
        });
};
