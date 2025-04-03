import { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  try {
    console.log('GitHub callback received')
    const query = getQuery(event)
    console.log('Callback query:', query)
    
    return await $auth.handleCallback(event)
  } catch (error) {
    console.error('GitHub callback error:', error)
    throw createError({
      statusCode: 500,
      message: 'Callback failed',
      cause: error
    })
  }
}) 