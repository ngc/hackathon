import type { Config } from 'tailwindcss'
import { join } from 'node:path'
import { createGlobPatternsForDependencies } from '@nx/react/tailwind'

import TailwindAnimate from 'tailwindcss-animate'

export function buildConfig(
  appDir: string,
): Config {
  return {
    content: [
      join(
        appDir,
        '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}',
      ),
      ...createGlobPatternsForDependencies(appDir),
    ],
    theme: {
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          secondary: {
            DEFAULT: 'hsl(var(--secondary))',
            foreground: 'hsl(var(--secondary-foreground))',
          },
          destructive: {
            DEFAULT: 'hsl(var(--destructive))',
            foreground: 'hsl(var(--destructive-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },
          accent: {
            DEFAULT: 'hsl(var(--accent))',
            foreground: 'hsl(var(--accent-foreground))',
          },
          popover: {
            DEFAULT: 'hsl(var(--popover))',
            foreground: 'hsl(var(--popover-foreground))',
          },
          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
          colors: {
            'color-1': 'hsl(var(--color-1))',
            'color-2': 'hsl(var(--color-2))',
            'color-3': 'hsl(var(--color-3))',
            'color-4': 'hsl(var(--color-4))',
            'color-5': 'hsl(var(--color-5))',
          },
        },
        borderRadius: {
          lg: `var(--radius)`,
          md: `calc(var(--radius) - 2px)`,
          sm: 'calc(var(--radius) - 4px)',
        },
        keyframes: {
          'accordion-down': {
            from: { height: '0' },
            to: { height: 'var(--radix-accordion-content-height)' },
          },
          'accordion-up': {
            from: { height: 'var(--radix-accordion-content-height)' },
            to: { height: '0' },
          },
          'orbit': {
            '0%': {
              transform:
                'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)',
            },
            '100%': {
              transform:
                'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)',
            },
          },
          'rainbow': {
            '0%': { 'background-position': '0%' },
            '100%': { 'background-position': '200%' },
          },
        },
        animation: {
          'accordion-down': 'accordion-down 0.2s ease-out',
          'accordion-up': 'accordion-up 0.2s ease-out',
          'orbit': 'orbit calc(var(--duration)*1s) linear infinite',
          'rainbow': 'rainbow var(--speed, 2s) infinite linear',
        },
      },
    },
    plugins: [TailwindAnimate],
  }
}
