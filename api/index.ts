import express from 'express';
import axios from 'axios';

const app = express();

app.get('/api/discord/banner/:code', async (req, res) => {
  const { code } = req.params;
  try {
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
    res.status(error.response?.status || 500).json({ error: 'Failed to fetch Discord data', details: error.message });
  }
});

app.get('/api/roblox/group/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://groups.roblox.com/v1/groups/${id}`, {
      timeout: 5000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    res.json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ error: 'Failed to fetch Roblox data', details: error.message });
  }
});

app.get('/api/roblox/thumbnail/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const response = await axios.get(`https://thumbnails.roblox.com/v1/groups/icons?groupIds=${id}&size=420x420&format=Png&isCircular=false`, {
      timeout: 5000,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    });
    res.json(response.data);
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ error: 'Failed to fetch Roblox thumbnail', details: error.message });
  }
});

export default app;
