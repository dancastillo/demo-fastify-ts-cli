import { FastifyPluginAsync } from 'fastify'

const index: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get('/', async function (request, reply) {
    return { auth: true, url: request.raw.url }
  })
}

export default index;
