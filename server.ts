import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route to fetch Discord Banner from Vanity Invite
  app.get('/api/discord/banner/:code', async (req, res) => {
    const { code } = req.params;
    try {
      const response = await fetch(`https://discord.com/api/v10/invites/${code}`);
      if (!response.ok) {
        throw new Error('Failed to fetch from Discord');
      }
      const data = await response.json();
      const guild = data.guild;

      if (guild && guild.banner) {
        const bannerUrl = `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=2048`;
        return res.json({ bannerUrl });
      }

      res.status(404).json({ error: 'No banner found for this guild' });
    } catch (error) {
      console.error('Discord API Error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
