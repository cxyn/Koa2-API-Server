module.exports = (router) => {
    router.prefix('/api')
    router.use('/demo', require('./demo'))
}