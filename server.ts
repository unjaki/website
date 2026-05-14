import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Route to fetch Discord Banner from Vanity Invite
  app.get('/api/discord/banner/:code', async (req, res) => {
    const { code } = req.params;
    try {
      console.log(`Fetching banner for Discord code: ${code}`);
      const response = await axios.get(`https://discord.com/api/v10/invites/${code}`, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      
      const guild = response.data.guild;

      if (guild && guild.banner) {
        const bannerUrl = `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=2048`;
        console.log(`Found banner URL: ${bannerUrl}`);
        return res.json({ bannerUrl });
      }

      console.log('No banner found for this guild');
      res.status(404).json({ error: 'No banner found for this guild' });
    } catch (error: any) {
      console.error('Discord API Error:', error.message);
      if (error.response) {
        console.error('Discord Status:', error.response.status);
        console.error('Discord Data:', JSON.stringify(error.response.data));
        res.status(error.response.status).json({ error: 'Discord API error', details: error.response.data });
      } else {
        res.status(500).json({ error: 'Internal server error', details: error.message });
      }
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
