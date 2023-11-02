import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer JqlDsIZqY6yCwlnb71d2HK303pU9BcOWJQBPcFa6-ydEbhFs9BeR6b46u3_2qmbzg-IOF3-wDOO45zyODI0bUVSB_xMR2PaZfohJoOiESuEa46b4vwbF05_PajcxZXYx",
  },
});
