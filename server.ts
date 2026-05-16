import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import axios from 'axios';

async function startServer() {
  const app = express();
  const PORT = Number(process.env.PORT) || 3000;

  // API Route to fetch Discord Banner and Info
  app.get('/api/discord/banner/:code', async (req, res) => {
    const { code } = req.params;
    try {
      console.log(`[BACKEND] Fetching info for Discord code: ${code}`);
      const response = await axios.get(`https://discord.com/api/v10/invites/${code}?with_counts=true`, {
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      
      const { guild, approximate_member_count, approximate_presence_count } = response.data;

      const result: any = {
        guildName: guild?.name,
        memberCount: approximate_member_count,
        presenceCount: approximate_presence_count,
        bannerUrl: null
      };

      if (guild && guild.banner) {
        result.bannerUrl = `https://cdn.discordapp.com/banners/${guild.id}/${guild.banner}.png?size=2048`;
      }

      res.json(result);
    } catch (error: any) {
      console.error(`[BACKEND] Discord API Error (${code}):`, error.response?.data || error.message);
      res.status(error.response?.status || 500).json({ error: 'Failed to fetch Discord data', details: error.message });
    }
  });

  // API Route to fetch Roblox Group Info
  app.get('/api/roblox/group/:id', async (req, res) => {
    const { id } = req.params;
    try {
      console.log(`[BACKEND] Fetching Roblox Group: ${id}`);
      const response = await axios.get(`https://groups.roblox.com/v1/groups/${id}`, {
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      res.json(response.data);
    } catch (error: any) {
      console.error(`[BACKEND] Roblox Group Info Error (${id}):`, error.response?.data || error.message);
      res.status(error.response?.status || 500).json({ error: 'Failed to fetch Roblox data', details: error.message });
    }
  });

  // API Route to fetch Roblox Group Thumbnail
  app.get('/api/roblox/thumbnail/:id', async (req, res) => {
    const { id } = req.params;
    try {
      console.log(`[BACKEND] Fetching Roblox Thumbnail: ${id}`);
      const response = await axios.get(`https://thumbnails.roblox.com/v1/groups/icons?groupIds=${id}&size=420x420&format=Png&isCircular=false`, {
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      res.json(response.data);
    } catch (error: any) {
      console.error(`[BACKEND] Roblox Thumbnail Error (${id}):`, error.response?.data || error.message);
      res.status(error.response?.status || 500).json({ error: 'Failed to fetch Roblox thumbnail', details: error.message });
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
