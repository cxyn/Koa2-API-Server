/**
 * Created by colin on 2018/10/09.
 */

const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const favicon = require('koa-favicon')
require('dotenv').config()
const port = process.env.PORT || 3003
const bodyParser = require('koa-bodyparser')
const query = require('./config/db')
const logger = require('koa-logger')
const cors = require('koa2-cors')

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger())
app.use(cors())
app.use(bodyParser())

require('./routes')(router)

app.use(router.routes()).use(router.allowedMethods())
app.listen(port, () => console.log(`API Server is running, the listening port is: ${port}`))