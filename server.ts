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
      console.log(`[BACKEND] Fetching info for Discord code: ${code} via Vanguard API Gateway`);
      const response = await axios.get(`https://api.vanguard-terminal.me/discord/invite/${code}`, {
        timeout: 5000,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      });
      
      const { id, name, icon, banner, approximate_member_count, approximate_presence_count } = response.data;
      
      let cleanName = name || 'Ground Service Medical Corps';
      if (cleanName.startsWith('NS | ')) {
        cleanName = cleanName.replace('NS | ', '');
      }

      const result: any = {
        guildName: cleanName,
        memberCount: approximate_member_count || response.data.memberCount || 2240,
        presenceCount: approximate_presence_count || response.data.presenceCount || 150,
        bannerUrl: null,
        iconUrl: null
      };

      if (banner) {
        if (banner.startsWith('http')) {
          result.bannerUrl = banner;
        } else {
          result.bannerUrl = `https://cdn.discordapp.com/banners/${id}/${banner}.png?size=2048`;
        }
      }

      if (icon) {
        if (icon.startsWith('http')) {
          result.iconUrl = icon;
        } else {
          result.iconUrl = `https://cdn.discordapp.com/icons/${id}/${icon}.png?size=256`;
        }
      }

      res.json(result);
    } catch (error: any) {
      console.warn(`[BACKEND] Vanguard API Error (${code}) - Using fallback:`, error.response?.data || error.message);
      // Fallback response instead of 500/error so the app UI remains fully functional and elegant
      res.json({
        guildName: 'Ground Service Medical Corps',
        memberCount: 2240,
        presenceCount: 150,
        bannerUrl: null,
        iconUrl: null
      });
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
      console.warn(`[BACKEND] Roblox Group Info Error (${id}) - Using fallback:`, error.response?.data || error.message);
      res.json({
        name: 'Ground Service Medical Corps',
        memberCount: 5410,
        description: 'The Ground Service Medical Corps is responsible for supporting the wider Stratocratic military by providing emergency medical care to servicemen and servicewomen.'
      });
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
      console.warn(`[BACKEND] Roblox Thumbnail Error (${id}) - Using fallback:`, error.response?.data || error.message);
      res.json({
        data: [{
          imageUrl: '/logos/GSMC_Logov2.webp'
        }]
      });
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
