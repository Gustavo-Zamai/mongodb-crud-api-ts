import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
//import * as createError from "http-errors";
import * as path from 'path';
import * as indexRouter from './routes/index';
import * as userRouter from './routes/users-route';

function createApp() {
  const app = express();

  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter.default);
  app.use('/users', userRouter.default);

  /* catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
*/

  return app;
}
export default createApp;
