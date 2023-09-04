const PORT = process.env.PORT;


const startingApp = (app: any) => {
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}`);
    });
};


export default startingApp;