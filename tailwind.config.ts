import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
    theme: {
    extend: {
      colors: {
        lightCyan: '#CEE3E9',   
        neon: '#52FFA8',
        text: '#cee3e8',
        cardBg: '#313a49',
        background: '#202632',
      },
      width: {
        84: '25rem',
        '-1': '-1rem',
      },
    }
  }
}   