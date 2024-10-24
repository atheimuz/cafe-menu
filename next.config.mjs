/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "image.istarbucks.co.kr",
            "img.79plus.co.kr",
            "mmthcoffee.com",
            "admin.hollys.co.kr",
            "mcdn.twosome.co.kr",
            "paikdabang.com",
            "composecoffee.com",
            "ediya.com"
        ]
    },
    async headers() {
        return [
            {
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT"
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
                    }
                ]
            }
        ];
    }
};

export default nextConfig;
