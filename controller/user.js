const axios = require("axios");
const formatBytes = require("./helper/formatBytes");
const formatDif = require("./helper/formatDif");

async function get_users(req, res) {
  const { data } = await axios.post(
    "http://94.131.107.244:4444/xui/inbound/list",
    undefined,
    {
      headers: {
        Cookie:
          "session=MTcwMDU3ODg4M3xEWDhFQVFMX2dBQUJFQUVRQUFCbF80QUFBUVp6ZEhKcGJtY01EQUFLVEU5SFNVNWZWVk5GVWhoNExYVnBMMlJoZEdGaVlYTmxMMjF2WkdWc0xsVnpaWExfZ1FNQkFRUlZjMlZ5QWYtQ0FBRURBUUpKWkFFRUFBRUlWWE5sY201aGJXVUJEQUFCQ0ZCaGMzTjNiM0prQVF3QUFBQVpfNElXQVFJQkJXRmtiV2x1QVFveE16Z3dNVE00T0UxeUFBPT18IS8hxP0TVBXv4J5n2l01m2RzYbaxIXtN53UQkhSm5_Q=; lang=fa-IR",
      },
    }
  );
  const inbounds = data.obj[data.obj.length - 1];
  //   expiryTime

  console.log(formatDif(inbounds.expiryTime));
  res.send("hi");
}

module.exports = {
  get_users,
};
