// This file was automatically added by layer0 deploy.
// You should commit this file to source control.
const { Router } = require('@layer0/core/router')
const { nextRoutes } = require('@layer0/next')

module.exports = new Router()
    .match('/service-worker.js', ({ serviceWorker }) => {
        return serviceWorker('.next/static/service-worker.js')
    })
    .match('/(.*)', ({ cache }) => {
        cache({
            edge: {
                maxAgeSeconds: 60 * 60,
                staleWhileRevalidateSeconds: 60 * 60 * 24, // this way stale items can still be prefetched
            },
        })
    })
  .use(nextRoutes) // automatically adds routes for all files under /pages
