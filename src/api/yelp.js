import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer_r7sOwzo3qW-aSu6sDMlMRw_U2XG8veDjTcBfmKzyA_-EmLqRDrIq_2YaHcVwcEnCMs9pq-ungahty3lpWBY4Kii2lsLmxMOsEfZf4-cYp6p9nHfbKeEOMwBTkcpYXYx",
  },
});
