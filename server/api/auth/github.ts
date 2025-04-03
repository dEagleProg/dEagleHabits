import { H3Event } from 'h3'
import { OAuthConfig } from '@auth/core/providers'

export default defineEventHandler(async (event: H3Event) => {
  try {
    const config = useRuntimeConfig()
    console.log('GitHub OAuth config:', {
      clientId: config.auth.github.clientId,
      origin: config.auth.origin
    })
    
    const githubProvider: OAuthConfig = {
      id: 'github',
      name: 'GitHub',
      type: 'oauth',
      authorization: {
        url: 'https://github.com/login/oauth/authorize',
        params: { scope: 'read:user user:email' }
      },
      token: 'https://github.com/login/oauth/access_token',
      userinfo: {
        url: 'https://api.github.com/user',
        async request({ tokens }) {
          console.log('Fetching user info with token:', tokens.access_token?.slice(0, 10) + '...')
          
          const profile = await fetch('https://api.github.com/user', {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
              'User-Agent': 'dEagleHabits'
            }
          }).then(res => res.json())
          
          console.log('GitHub profile:', profile)
          
          const emails = await fetch('https://api.github.com/user/emails', {
            headers: {
              Authorization: `Bearer ${tokens.access_token}`,
              'User-Agent': 'dEagleHabits'
            }
          }).then(res => res.json())
          
          console.log('GitHub emails:', emails)
          
          return {
            ...profile,
            email: emails.find((e: any) => e.primary)?.email
          }
        }
      },
      clientId: config.auth.github.clientId,
      clientSecret: config.auth.github.clientSecret
    }

    return await $auth.authenticate(event, githubProvider)
  } catch (error) {
    console.error('GitHub OAuth error:', error)
    throw createError({
      statusCode: 500,
      message: 'Authentication failed',
      cause: error
    })
  }
}) 