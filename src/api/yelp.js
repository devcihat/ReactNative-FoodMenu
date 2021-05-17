import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer 2GNqRH7mpird3Mdyit553x6JnDXJCW4E6TzVfeYrASVbHMnbnM2AXni3a7SkyXiVUikU71CackyAblmuE1DEFz-ziajqbTK119pcMsZSQcnobZi7C9hXtux_oxuiYHYx",
  },
});
