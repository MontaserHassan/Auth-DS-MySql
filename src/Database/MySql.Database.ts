import startingApp from '../Config/startingApp.config';
import { AppDataSource } from '../Config/typeOrm.config';



export const connectSQL = async (app: any) => {
    AppDataSource.initialize()
        .then(() => {
            startingApp(app);
            console.log("Data Source has been initialized!");
        })
        .catch((err) => {
            console.error("Error during Data Source initialization", err);
        })
};