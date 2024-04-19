type EnvType = {
  MONGODB_URI: string;
};

const ENV: EnvType = {
  MONGODB_URI: process.env.MONGODB_URI || "",
};

export default ENV;
