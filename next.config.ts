import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  typedRoutes: true,
  reactCompiler: true,
  experimental: {
    useTypeScriptCli: true,
    turbopackRustReactCompiler: true
  }
};

export default nextConfig;
