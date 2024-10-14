import { MetadataRoute } from "next";
import { getBrandsAPI } from "@/lib/remote/brand";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const data = await getBrandsAPI();
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    const routes: MetadataRoute.Sitemap = [
        {
            url: `${baseUrl}`,
            lastModified: new Date()
        }
    ];

    if ("list" in data) {
        const brandRoutes: MetadataRoute.Sitemap = data.list.map((brand) => ({
            url: `${baseUrl}/brand/${brand._id}`,
            lastModified: new Date()
        }));
        routes.push(...brandRoutes);
    }

    return routes;
}
