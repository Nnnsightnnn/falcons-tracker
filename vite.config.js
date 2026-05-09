import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import apiExtract from './vite-plugin-api-extract.js'

export default defineConfig({
  base: '/falcons-tracker/',
  plugins: [
    react(),
    apiExtract({
      tracker: 'falcons',
      team: { name: 'Atlanta Falcons', abbreviation: 'ATL' },
      league: 'NFL',
      sources: [
        { from: './src/playerData.js',        exportName: 'PLAYERS',            resource: 'roster' },
        { from: './src/playerData.js',        exportName: 'NEWS_DIGEST',        resource: 'news-digest' },
        { from: './src/playerData.js',        exportName: 'NEXT_GAME',          resource: 'next-game' },
        { from: './src/draftData.js',         exportName: 'DRAFT_DATA',         resource: 'draft' },
        { from: './src/offseasonCalendar.js', exportName: 'OFFSEASON_CALENDAR', resource: 'calendar' },
      ],
    }),
    {
      name: 'rss-proxy',
      configureServer(server) {
        server.middlewares.use('/api/rss', async (req, res) => {
          const url = new URL(req.url, 'http://localhost').searchParams.get('url');
          if (!url) {
            res.statusCode = 400;
            res.end('Missing url param');
            return;
          }
          try {
            const resp = await fetch(url, {
              headers: { 'User-Agent': 'Mozilla/5.0 FalconsTracker/1.0' },
            });
            const text = await resp.text();
            res.setHeader('Content-Type', 'application/xml; charset=utf-8');
            res.end(text);
          } catch (e) {
            res.statusCode = 502;
            res.end('Feed fetch failed: ' + e.message);
          }
        });
      },
    },
  ],
  server: {
    port: 3002,
    open: true,
  },
})
