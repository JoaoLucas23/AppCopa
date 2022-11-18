import {app} from './server-config/express-config';

const port = process.env.PORT || 3023;

app.listen(port,() => console.log(`Server is listening on port ${port}`));